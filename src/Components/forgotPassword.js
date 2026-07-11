import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from './Common/Button';
import Input from './Common/Input';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setErrors({ email: 'Email is required' });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Email is invalid' });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateOTP = () => {
    const newErrors = {};
    if (!otp) {
      newErrors.otp = 'OTP is required';
    }
    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 5) {
      newErrors.newPassword = 'Password must be at least 5 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async () => {
    if (!validateEmail()) return;

    setIsLoading(true);
    try {
      await axios.post('http://localhost:3001/user/sendOTP', { email });
      Swal.fire({
        title: 'Success',
        text: 'OTP sent to your email!',
        icon: 'success',
        timer: 3000,
      });
      setStep(2);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.error || 'Failed to send OTP. Try again.',
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTPAndResetPassword = async () => {
    if (!validateOTP()) return;

    setIsLoading(true);
    try {
      await axios.post('http://localhost:3001/user/updatePassword', {
        email,
        otp,
        newPassword,
      });
      Swal.fire({
        title: 'Success',
        text: 'Password updated successfully!',
        icon: 'success',
        timer: 3000,
      });
      setStep(1);
      setEmail('');
      setOtp('');
      setNewPassword('');
      setErrors({});
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.error || 'Failed to update password. Try again.',
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-form-section">
          <div className="auth-form-header">
            <h2 className="auth-title">
              {step === 1 ? 'Forgot Password' : 'Reset Password'}
            </h2>
            <p className="auth-subtitle">
              {step === 1
                ? 'Enter your email to receive OTP'
                : 'Enter OTP and new password'}
            </p>
          </div>

          {step === 1 && (
            <div className="auth-form">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({});
                }}
                error={errors.email}
                required
              />

              <Button
                type="button"
                variant="primary"
                size="large"
                fullWidth
                onClick={sendOTP}
                disabled={isLoading}
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </Button>

              <p className="auth-switch-text">
                Remember your password?{' '}
                <Link to="/signIn" className="auth-link">
                  Sign In
                </Link>
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="auth-form">
              <Input
                label="OTP"
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  if (errors.otp) setErrors({ ...errors, otp: '' });
                }}
                error={errors.otp}
                required
              />

              <Input
                label="New Password"
                type="password"
                placeholder="Enter your new password (min 5 characters)"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  if (errors.newPassword) setErrors({ ...errors, newPassword: '' });
                }}
                error={errors.newPassword}
                required
              />

              <Button
                type="button"
                variant="success"
                size="large"
                fullWidth
                onClick={verifyOTPAndResetPassword}
                disabled={isLoading}
              >
                {isLoading ? 'Resetting Password...' : 'Reset Password'}
              </Button>

              <Button
                type="button"
                variant="outline"
                size="medium"
                fullWidth
                onClick={() => {
                  setStep(1);
                  setOtp('');
                  setNewPassword('');
                  setErrors({});
                }}
              >
                Back
              </Button>
            </div>
          )}
        </div>

        <div className="auth-image-section">
          <div className="auth-image-overlay">
            <h3 className="auth-image-title">Reset Password</h3>
            <p className="auth-image-subtitle">Secure your account with a new password</p>
          </div>
          <img src="assets/highlights/cricketSignIn3.jpg" alt="Cricket" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
