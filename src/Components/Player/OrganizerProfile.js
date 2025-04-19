import React from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { signOut } from "../../redux-config/UserSlice";
import url from "../../URL/url.js";
import UpcomingEvent from "../HomePage/UpcomingEvents"

function LeftSidebar() {
  const [selectedPlayerId, setSelectedPlayerId] = useState({});
  const navigate = useNavigate();
  const profile_photo = useSelector((state) => state.User.user.profile_photo);
  const id = useSelector((state) => state.User.user._id);
  const name = useSelector((state) => state.User.user.name);
  const dispatch = useDispatch();
  const player = useSelector((state) => state.User.user);
   return (
     <>
       <div
         className="offcanvas offcanvas-start p-5 text-dark "
         tabIndex="-1"
         id="leftSidebar"
         aria-labelledby="leftSidebarLabel"
         style={{ width: "350px" }}>
         <button
           type="button"
           className="btn-close btn-close-black"
           data-bs-dismiss="offcanvas"
           aria-label="Close"
         ></button>
         <div className="offcanvas-header ps-5" >
 
           {profile_photo ? (
             <img
               src={profile_photo}
               id="logo"
               alt="User Profile"
               style={{
                 borderRadius: "50%",
                 width: "100px",
                 height: "100px",
                 cursor: "pointer",
               }}
               onClick={() => {
                 console.log("Navigating to PlayerProfile with player:", player);
                 setSelectedPlayerId(id);
                 navigate("/OrganizerMyProfile", { state: { id } });
               }}
             />
           ) : (
             <img
               src="assets/cricket1.webp"
               id="logo"
               alt="Default Logo"
               style={{
                 borderRadius: "50%",
                 width: "100px",
                 height: "100px",
                 cursor: "pointer",
               }}
               onClick={() => {
                 console.log("Navigating to PlayerProfile with player:", player);
                 setSelectedPlayerId(id);
                 navigate("/OrganizerMyProfile", { state: { id } });
               }}
             />
           )}
         </div>
         <div className="offcanvas-body ps-5 ">
           <h4 className="mt-3 text-dark">{name ? name : "Guest User"}</h4>
           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 " >
             <li className="nav-item" >
               <button
                 className="nav-link active text-dark"
                 onClick={() => {
                   console.log("Navigating to OrganizerMyProfile with player ID:", id);
                   setSelectedPlayerId(id);
                   navigate("/OrganizerMyProfile", { state: { id } });
                 }}
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 My Profile
               </button>
             </li>
             <li className="nav-item ">
               <HashLink className="nav-link text-dark" to="/About"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 }
               >
                 About
               </HashLink>
             </li>
             <li className="nav-item">
               <HashLink className="nav-link text-dark" to="/Player"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 Players
               </HashLink>
             </li>
             <li className="nav-item">
               <HashLink className="nav-link text-dark" to="/UpcomingTournamentsCards"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 Tournament
               </HashLink>
             </li>
             <li className="nav-item">
               <HashLink className="nav-link text-dark" to="/TeamsPage"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 Teams
               </HashLink>
             </li>
             <li className="nav-item">
               <HashLink className="nav-link text-dark" to="/WithoutTeam"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 Player Without Team
               </HashLink>
             </li>
             <li className="nav-item">
               <HashLink className="nav-link text-dark" to="/ContactUs"
                 style={{
                   display: "inline-block",
                   padding: "12px 24px",
                   fontSize: "15px",
                   fontWeight: "500",
                   color: "black",
                   border: "2px solid black",
                   borderRadius: "10px",
                   textTransform: "capatialize",
                   textAlign: "center",
                   margin: "10px 0",
                   cursor: "pointer",
                   width: "100%",
                   textDecoration: "",
                   letterSpacing: "1px",
                   transition: "all 0.3s ease-in-out",
                 }}
                 onMouseOver={(e) =>
                   (e.target.style.backgroundColor = "#007bff")
                 }
                 onMouseOut={(e) =>
                   (e.target.style.backgroundColor = "transparent")
                 } >
                 Contact Us
               </HashLink>
             </li>
           </ul>
         </div>
         <div className="d-flex justify-content-center align-items-center mt-auto">
           <button
             className="btn btn-danger w-75 mt-4"
             onClick={() => {
               console.log("Logging out...");
               dispatch(signOut());
               navigate("/");
             }}
           >
             Logout
           </button>
         </div>
       </div>
     </>
   );
}

export default function OrganizerProfile({ setSearchedList }) {
  const navigate = useNavigate();
  const [tournament, setTourna] = useState([]);
  const id = useSelector((state) => state.User.user._id);
  useEffect(() => {
    getTournamentbyId();
  }, []);
  const getTournamentbyId = async () => {
    try {
      console.log("organizer id : state.id : " + id)
      let response = await axios.get(url.tournament.TOURNAMENT_BY_ID + `/tournamentById/${id}`);
      console.log("this is tournament response in organizer profile : " + response.data.data);
      setTourna(response.data.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  const viewTourna = (id) => {
    navigate(`/tournamentById/${id}`)
  }
  const updateSchedule = (id) => {
    navigate(`/updateTournament/${id}`);
  }
  return (
    <>
      <nav
        className="navbar navbar-dark sticky-top p-3"
        style={{ backgroundColor: "#090129" }}
      >
        <div className="container-fluid">
          <LeftSidebar />
          <div className="col-md-1 col-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#leftSidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-md-2 col-1 offset-2 offset-md-2 d-flex justify-content-center">
            <button className="btn btn-primary" style={{ marginRight: '30px' }}
              onClick={() => navigate(`/UpdateProfileForm/${id}`)}>
              Update Profile
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/createTournamentReq")}
            >
              Create Tournament
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-4 text-white">
        <h1 className="text-center mb-4 text-light">Your Events</h1>
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/OrganizerTournament")}
          >
            View All
          </button>
        </div>
        <div className="container text-center d-flex justify-content-around flex-wrap gap-5 mt-3" style={{ whiteSpace: "nowrap" }}>
          {tournament.slice(0, 4).map((tourna, index) => (
            <div
              key={index} className="card text-black shadow-sm rounded d-inline-block p-3 mx-2"
              style={{ minWidth: "250px", display: "inline-block", background: "#c6c7cb" }}
            >
              <h6 className="text-primary">{tourna.TournamentName}</h6>
              <p>
                <strong>Organizer:</strong> {tourna.organizerId?.name || "Unknown"}
              </p>
              <p>
                <strong>Start:</strong> {new Date(tourna.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End:</strong> {new Date(tourna.endDate).toLocaleDateString()}
              </p>
              <div className="d-flex justify-content-between mt-2">
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => viewTourna(tourna._id)}
                >
                  Details
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => updateSchedule(tourna._id)}>
                  Update Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 text-white">
        <h1 className="text-center mb-4 text-light">Tournaments</h1>
        <UpcomingEvent />
      </div>
    </>
  );
}
