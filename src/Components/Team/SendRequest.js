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




import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SendRequest = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Get the team ID from URL
  const userId = useSelector((state) => state.User.user._id); // Get user ID
  const navigate = useNavigate();

  const sendJoinRequest = async () => {
    setLoading(true); // Start loading
    try {
      const requestPayload = {
        playerId: userId,
        teamId: id,
      };

      const response = await axios.post("http://localhost:3001/Team/req-to-join", requestPayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        Swal.fire({
          title: "Request Sent!",
          text: "Your request has been sent successfully to the team captain.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          timer: 2000,
          showConfirmButton: false,
        });
        setLoading(false);
      } else {
        Swal.fire({
          title: "Request Failed",
          text: "Failed to send the request. Try again later.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
        setLoading(false);
      }
    } catch (err) {
      console.error("Error sending join request:", err);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Send Join Request</h2>
            <p className="text-center">Are you sure you want to join this team?</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={sendJoinRequest}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Request to Captain"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendRequest;

