import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SendRequest() {
  const [team, setTeam] = useState(null);
  const [isCaptain, setIsCaptain] = useState(false);
  const userId = useSelector((state) => state.User.user._id);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        console.log("Fetching all teams");
        const response = await axios.get("http://localhost:3001/Team/viewteam");
        const teams = response.data.Team || [];
        console.log("teams:", teams)
        const currentUserTeam = teams?.find(team => team?.captainId._id === userId || team?.players.includes(userId));
        console.log("userid:", userId)
        if (currentUserTeam) {
          setTeam(currentUserTeam);
          setIsCaptain(currentUserTeam?.captainId._id === userId);
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
        requestPayload = {
          playerId: id,
          teamId: team?._id,
          senderId: userId,
          receiverId: id
        };
      } else {
        const response = await axios.get(`http://localhost:3001/Team/${id}`);
        const targetTeam = response.data.Team;

        requestPayload = {
          playerId: userId,
          teamId: id,
          senderId: userId,
          receiverId: targetTeam.captainId._id
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
