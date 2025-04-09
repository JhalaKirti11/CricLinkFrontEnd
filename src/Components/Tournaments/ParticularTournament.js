import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../URL/url.js";
import { useSelector, reactDispatch } from "react-redux";
import Swal from 'sweetalert2';

const TournamentById = () => {
  const params = useParams();
  const { state } = useLocation();
  const id = useSelector((state) => state.User.user._id);
  const role = useSelector((state) => state.User.user.role);
  const token = useSelector((state) => state.User?.token);

  const [tournament, setTournament] = useState({});
  const [result, setResult] = useState({ team_name: "", matchId: "", score: null });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState({});
  const [activeMatchId, setActiveMatchId] = useState(null); // Track active match result form
  const navigate = useNavigate();

  useEffect(() => {
    getTournamentbyId();
  }, []);

  const getTournamentbyId = async () => {
    try {
      let response = await axios.get(url.tournament.TOURNAMENT_BY_ID + `/tournamentById/${params.id}`);
      setTournament(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitting result for Match ID:", result.matchId+ " "+ result.team_name);
      const response = await axios.patch(`http://localhost:3001/match/result/${result.matchId}`, result);
      console.log("REsponse : "+ response.data.message);
      setSuccessMessage(response.data.message);
      setErrorMessage("");

      setTournament((prevTournament) => ({
        ...prevTournament,
        schedule: prevTournament.schedule.map((match) =>
          match.matchId?.matchId === result.matchId
            ? {
                ...match,
                matchId: {
                  ...match.matchId,
                  result: { winnerId: { teamName: result?.team_name }, score: result.score },
                },
              }
            : match
        ),
      }));
      
      setStatus((prevStatus) => ({ ...prevStatus, [result.matchId]: false }));
      setResult({ team_name: "", matchId: "", score: null });
    } catch (err) {
      setErrorMessage(err.response?.data?.err || "Internal server error. Please try again later.");
    }
  };

  return (
    <>
    <div className="container mt-5 text-light">
      <h1 className="text-center display-2 fw-bold">{tournament.TournamentName}</h1>
      <h4 className="text-center display-6">Organized by: {tournament.organizerId?.name || "N/A"}</h4>

      <div className="row mt-5 d-flex justify-content-center gap-4">
        <div className="col-md-4 p-4 bg-light rounded shadow-lg">
          <h3 className="fw-bold">Entry Fees & Dates</h3>
          <p className="fs-5"><strong>Entry Fees:</strong> {tournament.entry_fees || "0"} Rs</p>
          <p className="fs-5"><strong>Start Date:</strong> {tournament.startDate ? new Date(tournament.startDate).toLocaleDateString() : "N/A"}</p>
          <p className="fs-5"><strong>End Date:</strong> {tournament.endDate ? new Date(tournament.endDate).toLocaleDateString() : "N/A"}</p>
        </div>
        
        <div className="col-md-4 p-4 bg-light rounded shadow-lg">
          <h3 className="fw-bold">Teams Participating</h3>
          <ul className="fs-5">
            {tournament.teams?.length ? (
              tournament.teams.map((team, index) => (
                <li key={index}>
                  <strong>Team {index + 1}: </strong>
                  <Link to={`/Team/${team.teamId?._id}`} className="text-warning text-decoration-none">
                    {team.teamId?.teamName || "Unnamed Team"}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-muted">No teams registered yet.</li>
            )}
          </ul>
        </div>
      </div>

      <h3 className="mt-5 text-center fw-bold">Tournament Schedule</h3>
      <div className="d-flex flex-column align-items-center">
        {tournament.schedule?.length ? (
          tournament.schedule.map((match, index) => (
            <div key={index} className="mb-4 p-4 w-75 bg-primary rounded shadow-lg">
              <p><strong>Match {index + 1}:</strong> {match.matchId?.team1?.teamName || "N/A"} vs {match.matchId?.team2?.teamName || "N/A"}</p>
              <p><strong>MatchId:</strong> {match?.matchId?.matchId || "N/A"}</p>
              <p><strong>Venue:</strong> {match.matchId?.venue || "N/A"}</p>
              <p><strong>Winner:</strong> {match.matchId?.result?.winnerId?.teamName || "Not decided yet"}</p>
              <p><strong>Score:</strong> {match.matchId?.result?.score || "N/A"}</p>

              {id === tournament?.organizerId?._id && !result.team_name ?(
                                <button
                  className="btn btn-sm btn-warning mt-2"
                  onClick={() => setActiveMatchId(activeMatchId === match.matchId?.matchId ? null : match.matchId?.matchId)}
                >
                  {activeMatchId === match.matchId?.matchId ? "Hide" : "Update Match Result"}
                </button>
              ):null}

              {activeMatchId === match.matchId?.matchId && (
                <div className="mt-3 p-4 bg-secondary rounded shadow-lg">
                  <h3 className="fw-bold">Update Match Result</h3>
                  <form onSubmit={handleFormSubmit}>
                    <label>Match ID:</label>
                    <input type="text" className="form-control" value={result.matchId} onChange={(e) => setResult({ ...result, matchId: e.target.value })} required/>

                    <label>Winning Team:</label>
                    <input type="text" className="form-control" value={result.team_name} onChange={(e) => setResult({ ...result, team_name: e.target.value })} required />

                    <label>Score:</label>
                    <input type="number" className="form-control" value={result.score} onChange={(e) => setResult({ ...result, score: e.target.value })} required/>
                    <button type="submit" className="btn btn-success mt-3">Update Result</button>
                  </form>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No matches scheduled.</p>
        )}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-lg btn-warning fw-bold px-5 py-3 shadow-lg"
          onClick={() => {
            if (!token) {
              Swal.fire("Sign-in Required", "Please sign in to register for the tournament.", "warning");
            } else if (id === tournament?.organizerId?._id) {
              navigate(`/UpdateTournament/${tournament._id}`);
            } else {
              navigate(`/addTeam/${tournament._id}`);
            }
          }}
        >
          {id === tournament?.organizerId?._id ? "Update Tournament" : "Register"}
        </button>
      </div>
    </div>
    </>
  );
};

export default TournamentById;
