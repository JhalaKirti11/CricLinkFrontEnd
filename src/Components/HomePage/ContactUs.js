import "./homePage.css";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaInfoCircle, FaPen } from "react-icons/fa";

export default function ContactUs() {
  return (
    <footer className="footer" style={{ background: "#c6c7cb", padding: "50px 0" }}>
      <div className="container">
        <h1 className="text-center text-dark fw-bold mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          {/* Left Section */}
          <div className="col-md-5 bg-white p-4 rounded shadow">
            <h2 className="fw-bold mb-3">Have questions? Get in touch!</h2>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p><FaMapMarkerAlt className="text-primary" /> 709 4th Floor ATC Building SGSIT College, Lantern Square, Indore (MP)</p>
            <p><FaPhoneAlt className="text-primary" /> +91 7865456798</p>
            <p><FaEnvelope className="text-primary" /> info.beans@gmail.com</p>
          </div>
          
          <div className="col-md-6 bg-white p-4 rounded shadow ms-3">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text"><FaEnvelope /></span>
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text"><FaPhoneAlt /></span>
                    <input type="text" className="form-control" placeholder="Phone" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text"><FaInfoCircle /></span>
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label"><FaPen /> How can we help you?</label>
                <textarea className="form-control" rows="4" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Get in Touch</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
