import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../redux-config/UserSlice";
import url from "../URL/url.js";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleDetails from "./Google";
import Button from "./Common/Button";
import Input from "./Common/Input";
import "./Auth.css";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Yup Validation Schema
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(5, "Min 5 chars required").required("Password is required"),
  });

  const loginUser = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(url.player.signin, values);

      if (response.data.error) {
        toast.error("Invalid Credentials");
        setSubmitting(false);
        return;
      }

      dispatch(setUser(response.data));
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("currentUser", response.data.user.role);
      sessionStorage.setItem("token", response.data.token);

      toast.success("Sign In Successful");

      setTimeout(() => {
        if (response.data.user.role === "player") {
          navigate("/PlayerMyProfile");
        } else if (response.data.user.role === "organizer") {
          navigate("/OrganizerProfile");
        }
      }, 1000);

    } catch (error) {
      console.log("Error during Sign In:", error);
      toast.error("Sign In Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Form Section */}
        <div className="auth-form-section">
          <div className="auth-form-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Sign in to continue to CricLink</p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={loginUser}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="auth-form">
                <Field
                  name="email"
                  render={({ field }) => (
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      error={errors.email && touched.email ? errors.email : null}
                      required
                      {...field}
                    />
                  )}
                />

                <Field
                  name="password"
                  render={({ field }) => (
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      error={errors.password && touched.password ? errors.password : null}
                      required
                      {...field}
                    />
                  )}
                />

                <div className="auth-form-footer">
                  <Link to="/forgotPassword" className="forgot-password-link">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="large"
                  fullWidth
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>

                <div className="auth-divider">
                  <span>OR</span>
                </div>

                <div className="google-auth-wrapper">
                  <GoogleDetails />
                </div>

                <p className="auth-switch-text">
                  Don't have an account?{" "}
                  <Link to="/signUp" className="auth-link">
                    Register Now
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>

        {/* Image Section */}
        <div className="auth-image-section">
          <div className="auth-image-overlay">
            <h3 className="auth-image-title">CricLink</h3>
            <p className="auth-image-subtitle">Your Premier Cricket Management Platform</p>
          </div>
          <img src="assets/highlights/cricketSignIn3.jpg" alt="Cricket Highlights" />
        </div>
      </div>
    </div>
  );
}
