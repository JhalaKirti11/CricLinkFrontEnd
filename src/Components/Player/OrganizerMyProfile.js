// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Swal from "sweetalert2";
// import url from "../../URL/url.js";

// export default function OrganizerMyProfile() {
//   const { state } = useLocation();
//   console.log("state.id "+state)
//   const navigate = useNavigate();
//   const id = useSelector((state) => state.User.user._id);
//   const [organizerProfile, setOrganizerProfile] = useState(null);

//   useEffect(() => {
//     fetchOrganizerData();
//   }, [state.id]);

//   const fetchOrganizerData = async () => {
//     try {
//       let response = await axios.get(url.organizer.Organizer_profile + `/${state.id}`);
//       setOrganizerProfile(response.data);
//     } catch (error) {
//       console.error("Error fetching organizer details:", error);
//       Swal.fire("Error", "Failed to load organizer details.", "error");
//     }
//   };

//   if (!organizerProfile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container-fluid p-4 text-light">
//       {/* Back Arrow Button */}
//       <i
//         className="btn fa-solid fa-arrow-left fa-2xl mt-4 ms-4"
//         onClick={() => navigate(-1)}
//         style={{ color: "#ffffff" }}
//       ></i>

//       {/* Title Section */}
//       <div className="text-center">
//         <h2 className="text-decoration-underline" style={{ fontSize: "2rem", color: "#FFA500" }}>
//           Organizer Details
//         </h2>
//       </div>

//       {/* Profile and Details Section */}
//       <div className="d-flex justify-content-between mt-5 flex-wrap">
//         {/* Organizer Image and Info Section */}
//         <div className="col-md-4 d-flex flex-column align-items-center" id="OrganizerProfileImage">
//           <img
//             src={organizerProfile?.profile_photo || "/user.webp"}
//             width="80%"
//             height="300rem"
//             alt="Organizer"
//             style={{
//               border: "1px solid #fff",
//               objectFit: "cover",
//               borderRadius: "8px",
//             }}
//           />
//           <h4 className="mt-3 text-center" style={{ fontSize: "1.5rem", color: "#c3c3c3" }}>
//             {organizerProfile?.name}
//           </h4>
//           <p className="mt-3" style={{ fontSize: "1.2rem" }}>
//             <strong>Email:</strong> <span>{organizerProfile?.email || "N/A"}</span>
//           </p>
//         </div>

//         {/* Organizer Details Section */}
//         <div id="login-box" className="col-md-7">
//           <form>
//             {/* Role */}
//             <div id="user-box" style={{ marginBottom: "1rem" }}>
//               <label style={{ fontSize: "1.3rem" }}>Role</label>
//               <input
//                 type="text"
//                 name="role"
//                 value={organizerProfile?.role || "N/A"}
//                 readOnly
//                 className="form-control"
//                 style={{ fontSize: "1.2rem", backgroundColor: "#f8f9fa" }}
//               />
//             </div>

//             {/* Contact */}
//             <div id="user-box" style={{ marginBottom: "1rem" }}>
//               <label style={{ fontSize: "1.3rem" }}>Contact</label>
//               <input
//                 type="text"
//                 name="contact"
//                 value={organizerProfile?.contact || "N/A"}
//                 readOnly
//                 className="form-control"
//                 style={{ fontSize: "1.2rem", backgroundColor: "#f8f9fa" }}
//               />
//             </div>

//             {/* Location */}
//             <div id="user-box" style={{ marginBottom: "1rem" }}>
//               <label style={{ fontSize: "1.3rem" }}>Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={organizerProfile?.profile?.location || "N/A"}
//                 readOnly
//                 className="form-control"
//                 style={{ fontSize: "1.2rem", backgroundColor: "#f8f9fa" }}
//               />
//             </div>
//           </form>

//           {/* Action Buttons */}
//           <div className="mt-4 d-flex justify-content-between">
//             <button
//               style={{
//                 backgroundColor: "#FFA500",
//                 color: "white",
//                 padding: "12px 24px",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "1.2rem",
//               }}
//               onClick={() => navigate(`/UpdateProfileForm/${id}`)}
//             >
//               Update Profile
//             </button>

//             <button
//               style={{
//                 backgroundColor: "#007BFF",
//                 color: "white",
//                 padding: "12px 24px",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "1.2rem",
//               }}
//               onClick={() => navigate("/createTournamentReq")}
//             >
//               Create Tournament
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//==================================================================


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../../URL/url.js";

export default function OrganizerMyProfile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.User.user._id);
  const [organizerProfile, setOrganizerProfile] = useState(null);

  useEffect(() => {
    fetchOrganizerData();
  }, [state.id]);

  const fetchOrganizerData = async () => {
    try {
      let response = await axios.get(url.organizer.Organizer_profile + `/${state.id}`);
      setOrganizerProfile(response.data);
    } catch (error) {
      console.error("Error fetching organizer details:", error);
      Swal.fire("Error", "Failed to load organizer details.", "error");
    }
  };

  if (!organizerProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex flex-column align-items-center mt-5 p-5 text-light" style={{ maxHeight: "100vh"}}>
      {/* Organizer Details Card */}
      <div className="bg-white rounded shadow-lg text-dark p-4 mb-4" style={{ width: "100%", maxWidth: "700px", height: "550px" }}>
        
        {/* Back Button */}
        <i className="btn fa-solid fa-arrow-left fa-1xl mb-4 mt-2"
          onClick={() => navigate(-1)}
          style={{ color: "black", cursor: "pointer" }}>
        </i>

        {/* Page Title */}
        <div className="text-center mb-2">
          <h2 className="text-decoration-underline text-dark">Organizer Details</h2>
        </div>

        {/* Organizer Details Section */}
        <div className="row">
          {/* Organizer Image and Info */}
          <div className="col-md-4 text-center mb-4 p-4">
            <img src={organizerProfile?.profile_photo || "/user.webp"} width="100%" height="300rem" alt="Organizer"
              style={{ objectFit: "cover", borderRadius: "10px" }} />
            <h4 className="mt-3 text-dark">{organizerProfile?.name}</h4>
          </div>

          {/* Organizer Details Form */}
          <div className="col-md-8 p-4 text-dark">
            <form>
              <div className="mb-3">
                <label>Role</label>
                <input type="text" name="role" value={organizerProfile?.role} readOnly className="form-control bg-white text-dark" />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="text" name="email" value={organizerProfile?.email || "N/A"} readOnly className="form-control bg-white text-dark" />
              </div>
              <div className="mb-3">
                <label>Contact</label>
                <input type="text" name="contact" value={organizerProfile?.contact || "N/A"} readOnly className="form-control bg-white text-dark" />
              </div>
              <div className="mb-3">
                <label>Location</label>
                <input type="text" name="location" value={organizerProfile?.profile?.location || "N/A"} readOnly className="form-control bg-white text-dark" />
              </div>
            </form>

            {/* Action Buttons */}
            <button className="btn btn-primary mt-3" onClick={() => navigate(`/UpdateProfileForm/${id}`)}>Update Profile</button>
            <button className="btn btn-success mt-3 ms-2" onClick={() => navigate("/createTournamentReq")}>Create Tournament</button>
          </div>
        </div>
      </div>
    </div>
  );
}
