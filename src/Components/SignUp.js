import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../URL/url.js";
import "../App.css";
import "./SignUp.css";
import "./Auth.css";
import Button from "./Common/Button";
import Input from "./Common/Input";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAlert = (iconStatus, title) => {
    Swal.fire({
      title,
      text: "SignUp",
      icon: iconStatus,
      timer: 3000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updatedFormData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      contact: formData.contact,
      role: formData.role,
    };

    try {
      const response = await axios.post(url.player.signup, updatedFormData);
      handleAlert("success", "Successfully signed up");

      setTimeout(() => {
        if (response.data.user.role === "player" || response.data.user.role === "Player") {
          navigate("/PlayerMyProfile");
        } else if (response.data.user.role === "organizer") {
          navigate("/OrganizerProfile");
        }
      }, 1000);
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      handleAlert("error", "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-form-section">
          <div className="auth-form-header">
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">Join CricLink and start your cricket journey</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <Input
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              error={errors.name}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              error={errors.email}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password (min 5 characters)"
              value={formData.password}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              error={errors.password}
              required
            />

            <Input
              label="Contact Number"
              type="tel"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              error={errors.contact}
              required
            />

            <div className="input-wrapper">
              <label className="input-label">
                User Role <span className="required-asterisk">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={`input-field ${errors.role ? 'input-error' : ''}`}
              >
                <option value="">Select Role</option>
                <option value="player">Player</option>
                <option value="organizer">Organizer</option>
              </select>
              {errors.role && <span className="error-message">{errors.role}</span>}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
            >
              Sign Up
            </Button>

            <p className="auth-switch-text">
              Already have an account?{" "}
              <Link to="/signIn" className="auth-link">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        <div className="auth-image-section">
          <div className="auth-image-overlay">
            <h3 className="auth-image-title">Join CricLink</h3>
            <p className="auth-image-subtitle">Connect with players, teams, and tournaments</p>
          </div>
          <img src="assets/highlights/cricket2.jpg" alt="Cricket" />
        </div>
      </div>
    </div>
  );
}
