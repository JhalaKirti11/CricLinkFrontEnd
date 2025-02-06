import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Teams.css";

function Teams() {
  const [teams, setTeams] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.User?.token);

  useEffect(() => {
    let isMounted = true; // Prevents state updates on unmounted component

    axios
      .get("http://localhost:3001/Team/viewteam")
      .then((response) => {
        if (isMounted) setTeams(response.data.Team);
      })
      .catch((err) => console.error("Error fetching teams:", err));

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, []);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="teams-container text-center">
      <h2 className="text-center text-white">Teams</h2>
    
      {/* <button className="btn btn-outline-light rounded-pill px-4 py-3" onClick={() => navigate("/TeamsPage")}>
        View All
      </button> */}

      <div className="scroll-wrapper d-flex justify-content-center align-items-center">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>

        <div ref={containerRef} className="team-scroll-container d-flex">
          {teams.map((team, index) => (
            <div key={team._id || index} className="team-card text-center" style={{background:"#6c7cb"}}>
              <h3 className="team-name">{team.teamName}</h3>
              <p><strong>Captain:</strong> {team?.captainId?.name || "Unknown"}</p>
              <p><strong>Players:</strong> {team?.players?.length || 0}/11</p>

              <div className="team-actions d-flex justify-content-center">
                <button
                  className="btn btn-info btn-lg mx-1"
                  onClick={() => navigate(`/Team/${team._id}`)}
                >
                  View
                </button>
                {!token ? (
                  <button
                    className="btn btn-success btn-sm mx-1"
                    onClick={() => Swal.fire("Sign-in Required", "Please sign in to join.", "warning")}
                  >
                    Join
                  </button>
                ):(
                  <button className="btn btn-success btn-sm"
                  onClick={() => navigate(`/Team/req-to-join/${team._id}`)}>
                  Join
                </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Teams;
