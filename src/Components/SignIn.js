import { useNavigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../redux-config/UserSlice";
import url from "../URL/url.js";
import "../App.css";
import GoogleSign from "./googleSign.js";

import GoogleDetails from "./Google";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = { email, password };
      console.log('Form Data:', formData);
      const response = await axios.post(url.player.signin, formData);
      console.log("======================================================");
      console.log("Sign In Response:", response.data);
      console.log("======================================================");
      if(response.data.error){
        alert("invalid");
      }
      console.log("Sign In Response:", response.data.user.role);
      dispatch(setUser(response.data));

      toast.success("Sign In Successful");
      setTimeout(() => {
        if (
          response.data.user.role == "player") {
          navigate("/PlayerMyProfile");
        } else if (response.data.user.role == "organizer") {
          console.log("sign successful");
          navigate("/OrganizerProfile");
        }
      }, 1000);
    } catch (error) {
      console.log("Error during Sign In:", error);
      toast.error("Sign In Failed");
    }
  };

  return (
    <div className="signup-container">
      {/* Form Section */}
      <div className="signup-form-section">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Sign In</h2>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign In</button>
          <Link to="/forgotpassword">Forgot Password?</Link>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-danger">Register</Link>
          </p>
          <p className="text-center">OR</p>
          <GoogleDetails />
        </form>
      </div>

      {/* Image Section */}
      <div className="signup-image-section" style={{width:"30%"}}>
        <img src="assets/highlights/cricketSignIn3.jpg" alt="Cricket Highlights" />
      </div>
    </div>
  );
};
