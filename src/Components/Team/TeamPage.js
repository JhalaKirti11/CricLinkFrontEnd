import { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:3001/Team/viewteam");
        setTeams(response.data.Team);
        console.log("teams : "+response.data.Team);
      } catch (err) {
        console.error("Error fetching teams data:", err);
      }
    };
    fetchTeams();
  }, []);

  const handleTeamClick = (id) => {
    navigate(`/Team/${id}`);
  };
  
  return (
    <div className="container mt-4 text-white" >
      {/* ========================== Teams ======================== */}
      <h1 className="text-center mb-4 text-light text-decoration-underline" >
        Teams
      </h1>
  
      <div className="justify-content-center align-items-center mt-5" id="teamContainer">
        <div className="row text-center justify-content-center">
          {teams.map((team) => (
            <div className="col-md-4 mb-5" key={team._id}>
              <div className="card bg-dark text-white shadow-sm rounded p-3">
                <h1
                  style={{
                    fontSize: '2rem',
                  }}
                  onClick={() => handleTeamClick(team._id)}
                >
                  {team.teamName}
                </h1>
                <h4>Captain: {team.captainId?.name || 'N/A'}</h4>
                <p style={{ fontSize: '1.1rem' }}>
                  {team.players.filter((player) => player !== null).length} / 11 Players
                </p>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <button className="btn btn-success btn-sm"
                    onClick={() => navigate(`/Team/req-to-join/${team._id}`)}>
                    Join
                  </button>
                  <button
                  className="btn btn-primary"
                  style={{ width: "120px" }}
                  onClick={() => {
                    if (team?.players.length > 0) {
                      handleTeamClick(team._id);
                    } else {
                      alert("No player available");
                    }
                  }}
                >
                  View
                </button>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TeamsPage;
