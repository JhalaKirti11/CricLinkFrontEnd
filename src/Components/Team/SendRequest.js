// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// function SendRequest() {
//     const [teams, setTeams] = useState({});
//     const userid = useSelector((state) => state.User.user._id);
//     const { id } = useParams();
//     const navigate=useNavigate();

//     useEffect(() => {
//         const fetchTeams = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3001/Team/${id}`);
//                 setTeams(response.data);
//             } catch (err) {
//                 console.error("Error fetching team data:", err);
//             }
//         };
//         fetchTeams();
//     }, [id]);

//     const sendJoinRequest = async () => {
//         try {
//             const requestPayload = {
//                 playerId: userid, 
//                 teamId: id
//             };
//             console.log("Request Payload:", requestPayload);

//             const response = await axios.post("http://localhost:3001/Team/req-to-join", requestPayload, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.data) {
//                 alert("Request sent successfully to the team captain.");
//               navigate(-1)
//             } else {
//                 alert("Failed to send the request.");
//             }
//         } catch (err) {
//             console.error("Error sending join request:", err);
//         }
//     };

//     return (
//         <>
//             <div className="modal show" style={{ display: "block", backgroundColor: "rgba(219, 224, 221, 0.5)" }}>
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title text-black">Send Team Join Request</h5>
//                         </div>
//                         <div className="modal-body">
//                             <p style={{color:"black"}}>Request sent successfully!</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-primary" onClick={sendJoinRequest}>
//                                 Send Request to Captain
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SendRequest;


//======================================= 2 =========================================


// import { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SendRequest = () => {
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams(); // Get the team ID from URL
//   const userId = useSelector((state) => state.User.user._id); // Get user ID
//   const navigate = useNavigate();

//   const sendJoinRequest = async () => {
//     setLoading(true); // Start loading
//     try {
//       const requestPayload = {
//         playerId: userId,
//         teamId: id,
//       };

//       const response = await axios.post("http://localhost:3001/Team/req-to-join", requestPayload, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.data) {
//         Swal.fire({
//           title: "Request Sent!",
//           text: "Your request has been sent successfully to the team captain.",
//           icon: "success",
//           confirmButtonColor: "#3085d6",
//           timer: 2000,
//           showConfirmButton: false,
//         });
//         setLoading(false);
//       } else {
//         Swal.fire({
//           title: "Request Failed",
//           text: "Failed to send the request. Try again later.",
//           icon: "error",
//           confirmButtonColor: "#d33",
//         });
//         setLoading(false);
//       }
//     } catch (err) {
//       console.error("Error sending join request:", err);
//       Swal.fire({
//         title: "Error",
//         text: "Something went wrong. Please try again.",
//         icon: "error",
//         confirmButtonColor: "#d33",
//       });
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card p-4">
//             <h2 className="text-center mb-4">Send Join Request</h2>
//             <p className="text-center">Are you sure you want to join this team?</p>
//             <div className="d-flex justify-content-center">
//               <button
//                 className="btn btn-success"
//                 onClick={sendJoinRequest}
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send Request to Captain"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SendRequest;

//==========================  3 =============================================

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SendRequest() {
  const [team, setTeam] = useState(null);
  const [isCaptain, setIsCaptain] = useState(false);
  const userId = useSelector((state) => state.User.user._id);  // Current logged-in user
  const { id } = useParams();  // Player ID or Team ID from URL

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        console.log("Fetching all teams");
        const response = await axios.get("http://localhost:3001/Team/viewteam");  // Fetch all teams from backend
        const teams = response.data.Team || [];  // Extract teams array
        console.log("teams:", teams)
        const currentUserTeam = teams?.find(team => team?.captainId._id === userId || team?.players.includes(userId));
        console.log("userid:", userId)
        if (currentUserTeam) {
          setTeam(currentUserTeam);
          setIsCaptain(currentUserTeam?.captainId._id === userId);  // Check if current user is captain
        }
      } catch (err) {
        console.error("Error fetching teams data:", err);
      }
    };

    if (userId) fetchAllTeams();
  }, [userId]);

  const sendJoinRequest = async () => {
    try {
      let requestPayload;

      if (isCaptain) {
        // Captain sends request to player (get player ID from URL)
        requestPayload = {
          playerId: id,  // Get player ID from URL
          teamId: team?._id,  // Captain's team ID
          senderId: userId,  // Current logged-in user ID (Captain)
          receiverId: id  // Player ID
        };
      } else {
        // Player sends request to captain
        // Fetch the team by team ID
        const response = await axios.get(`http://localhost:3001/Team/${id}`);
        const targetTeam = response.data.Team;

        requestPayload = {
          playerId: userId,  // Current player ID
          teamId: id,  // Team ID from URL
          senderId: userId,  // Current logged-in user ID (Player)
          receiverId: targetTeam.captainId._id  // Captain ID
        };
      }

      console.log("Sending request with:", requestPayload);

      const result = await axios.post("http://localhost:3001/Team/req-to-join", requestPayload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (result.data) {
        console.log("Request successful:", result.data);
        alert("Request sent successfully!");
        navigate(-1);
      } else {
        alert("Failed to send the request.");
      }
    } catch (err) {
      console.error("Error sending request:", err);
    }
  };

  return (
    <>
      <div className="modal show" style={{ display: "block", backgroundColor: "rgba(219, 224, 221, 0.5)" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black">{isCaptain ? "Invite Player" : "Send Join Request"}</h5>
            </div>
            <div className="modal-body">
              {isCaptain ? (
                <p style={{ color: "black" }}>You are the captain, sending request to player.</p>
              ) : (
                <p style={{ color: "black" }}>You are sending a join request.</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={sendJoinRequest}>
                {isCaptain ? "Invite Player" : "Send Request"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendRequest;