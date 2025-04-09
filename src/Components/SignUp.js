import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoogleSign from "./googleSign.js";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import url from "../URL/url.js";
import "../App.css";
import "./SignUp.css";

export const ProfileContext = createContext();

export default function SignUpForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [profile, setProfile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "",
  });

  useEffect(() => {
    //         axios.get(url?.category?.all)
    // axios.get(url.category?.all)
    //     .then(response => {
    //         setCategories(response.data.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  }, []);

  const fetchSubCategory = (category_id) => {
    axios
      .post(url.subCategory.byCategory, { category_id })
      .then((response) => {
        setSubCategory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextStep = () => setCurrentPage(currentPage + 1);
  const prevStep = () => setCurrentPage(currentPage - 1);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
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

    const updatedFormData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      contact: formData.contact,
      role: formData.user,
    };

    try {
      console.log("Hellooooooo.......");
      console.log("HRitik>>> data:", updatedFormData);
      const response = await axios.post(url.player.signup, updatedFormData);
      console.log("API Response:", response.data);
      handleAlert("success", "Successfully signed up");

      setTimeout(() => {
        if (response.data.user.role == "Player") {
          navigate("/PlayerMyProfile");
        } else if (response.data.user.role == "organizer") {
          console.log("sign successful");
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
    <div className="signup-container">
      <div className="signup-form-section">

        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Sign Up</h2>
          <div className="input-group">
            <label>Name</label>
            <input
              type="name"
              placeholder="Enter Your Name"
              onChange={(e) =>
                handleChange(e.target.name, e.target.value)
              }
              name="name"
              value={(profile && profile.name) || formData.name}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              name="email"
              value={(profile && profile.email) || formData.email}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              onChange={(e) =>
                handleChange(e.target.name, e.target.value)
              }
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter password"
            />          </div>
          <div className="input-group">
            <label>Contact Number</label>
            <input type="tel" name="contact" onChange={(e) => handleChange(e.target.name, e.target.value)} value={(profile && profile.contact) || formData.contact} required />
          </div>
          <div className="input-group">
            <label>User Role</label>
            <select
              
              name="user"
              value={formData.user}
              onChange={(e) =>
                handleChange(e.target.name, e.target.value)
              }
              aria-label="Default select example"
            >
              <option style={{ color: "#000000" }} selected>
                Select Option
              </option>
              <option style={{ color: "#000000" }} value="player">
                Player
              </option>
              <option
                style={{ color: "#000000" }}
                value="organizer"
              >
                Organizer
              </option>
              {/* <option style={{ color: '#000000' }} value="captain">Captain</option> */}
            </select>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          {/* <p className="text-center">OR</p>
          <GoogleSign /> */}
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/signin")}
          >
            Back to Sign In
          </button>
        </form>
      </div>
      <div className="signup-image-section">
        <img src="assets/highlights/cricket2.jpg"></img>
      </div>
    </div>
  );
}
