
import "./homePage.css";
// import TextField from '@mui/material/TextField';

// export default () => {
//     return <>
//         <footer id="contactUs">
//             <div>
//                 <div className="row">
//                     <div className="text-white text-decoration-underline">
//                         <h1 className="text-center">Contact Us</h1>
//                         <div className="row">
//                             <div className="col-md-5 me-5 mt-2 p-5 ">
//                                 <h1>Have questions? Get in touch !</h1>
//                                 <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
//                                 <i className="fa-solid fa-location-dot text-warning">&nbsp;&nbsp;&nbsp;</i>
//                                 <label>709 15h Street, Office Indore </label><br />
//                                 <i className="fa-solid fa-phone  text-warning">&nbsp;&nbsp;&nbsp;</i>
//                                 <label>+91 7865456798 </label><br />
//                                 <i className="fa-regular fa-envelope text-warning ">&nbsp;&nbsp;&nbsp;</i>
//                                 <label>info@gmail.com</label>
//                             </div>
//                             <div className="col-md-6 mt-4 ">
//                                 <form className="">
//                                     <div className="d-flex justify-content-around ">
//                                         <div className=''>
//                                             <i className="fas fa-user mt-1">&nbsp;&nbsp;&nbsp;</i>
//                                             <TextField id="standard-textarea" label="" placeholder="Name :" multiline variant="standard" />
//                                         </div>
//                                         <div>
//                                             <i className="fas fa-envelope ">&nbsp;&nbsp;&nbsp;</i>
//                                             <TextField className='' id="filled-textarea" label="" placeholder="Email :" multiline variant="standard" />
//                                         </div>
//                                     </div>
//                                     <div className=" d-flex justify-content-around mt-4" id="content" >
//                                         <div>
//                                             <i className="fas fa-phone mt-1 ">&nbsp;&nbsp;&nbsp;</i>
//                                             <TextField className='text-white' id="filled-textarea" label="" placeholder=" Phone :" multiline variant="standard" />
//                                         </div>
//                                         <div>
//                                             <i className="fas fa-info-circle mt-1 ml-3">&nbsp;&nbsp;&nbsp;</i>
//                                             <TextField className='text-white' id="filled-textarea" label="" placeholder="Subject :" multiline variant="standard" />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex justify-content-center mt-4">
//                                         <i className="fa-solid fa-pen-to-square">&nbsp;&nbsp;&nbsp;</i>
//                                         <label for="message">How can we help you? Feel free to get in touch</label>
//                                     </div>
//                                     <div className="d-flex justify-content-center mt-4">
//                                         <button type="button" className=" fa-regular fa-comment btn btn-secondary btn-lg " id="box">GET IN TOUCH</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     </>
// }

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
          
          {/* Right Section (Form) */}
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
