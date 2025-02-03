// import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import url from "../../URL/url.js";
// import { useSelector } from "react-redux";
// import Swal from 'sweetalert2';

// const TournamentById = () => {
//   const params = useParams();
//   const { state } = useLocation();
//   const id = useSelector((state) => state.User.user._id);
//   const role = useSelector((state) => state.User.user.role);
//   const token = useSelector((state) => state.User?.token);

//   const [tournament, setTournament] = useState({});
//   const [result, setResult] = useState({ team_name: "", matchId: "", score: null });
//   const [status, setStatus] = useState({});
//   const [showResultForm, setShowResultForm] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getTournamentbyId();
//   }, []);

//   const getTournamentbyId = async () => {
//     try {
//       let response = await axios.get(url.tournament.TOURNAMENT_BY_ID + `/tournamentById/${params.id}`);
//       setTournament(response.data.data[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ background: "linear-gradient(90deg, #001F3F, #0074D9)", minHeight: "100vh", padding: "40px" }}>
//       <h1 className="text-center text-light display-2 font-weight-bold">{tournament.TournamentName}</h1>
//       <h4 className="text-center text-light display-6">Organized by: {tournament.organizerId?.name || "N/A"}</h4>

//       <div className="row mt-5">
//         <div className="col-md-6">
//           <h3 className="text-light font-weight-bold">Entry Fees & Dates</h3>
//           <p className="fs-4 text-light"><strong>Entry Fees:</strong> {tournament.entry_fees || "0"} Rs</p>
//           <p className="fs-4 text-light"><strong>Start Date:</strong> {tournament.startDate ? new Date(tournament.startDate).toLocaleDateString() : "N/A"}</p>
//           <p className="fs-4 text-light"><strong>End Date:</strong> {tournament.endDate ? new Date(tournament.endDate).toLocaleDateString() : "N/A"}</p>
//         </div>
        
//         <div className="col-md-6">
//           <h3 className="text-light font-weight-bold">Teams Participating</h3>
//           <ul className="fs-4 text-light">
//             {tournament.teams?.length ? (
//               tournament.teams.map((team, index) => (
//                 <li key={index}>
//                   <strong>Team {index + 1}: </strong>
//                   <Link to={`/Team/${team.teamId?._id}`} className="text-warning">
//                     {team.teamId?.teamName || "Unnamed Team"}
//                   </Link>
//                 </li>
//               ))
//             ) : (
//               <li className="text-muted">No teams registered yet.</li>
//             )}
//           </ul>
//         </div>
//       </div>

//       <h3 className="text-light mt-5 font-weight-bold">Tournament Schedule</h3>
//       <ul className="fs-4 text-light">
//         {tournament.schedule?.length ? (
//           tournament.schedule.map((match, index) => (
//             <li key={index} className="mb-4 p-4" style={{ background: "#00509E", borderRadius: "10px" }}>
//               <p><strong>Match {index + 1}:</strong> {match.matchId?.team1?.teamName || "N/A"} vs {match.matchId?.team2?.teamName || "N/A"}</p>
//               <p><strong>MatchId:</strong> {match?.matchId?.matchId || "N/A"}</p>
//               <p><strong>Venue:</strong> {match.matchId?.venue || "N/A"}</p>
//               <p><strong>Winner:</strong> {match.result?.winnerId?.teamName || "Not decided yet"}</p>
//               <p><strong>Score:</strong> {match.result?.score || "N/A"}</p>
//               {id === tournament?.organizerId?._id && (
//                 <button className="btn btn-sm btn-warning mt-2" onClick={() => setShowResultForm(!showResultForm)}>
//                   {showResultForm ? "Hide" : "Update Match Result"}
//                 </button>
//               )}
//             </li>
//           ))
//         ) : (
//           <li className="text-muted">No matches scheduled.</li>
//         )}
//       </ul>

//       {showResultForm && (
//         <div>
//           <h3 className="text-light mt-5 font-weight-bold">Update Match Result</h3>
//           <form className="fs-4 text-light">
//             <label>Match ID:</label>
//             <input type="text" className="form-control" value={result.matchId} onChange={(e) => setResult({ ...result, matchId: e.target.value })} />

//             <label>Winning Team:</label>
//             <input type="text" className="form-control" value={result.team_name} onChange={(e) => setResult({ ...result, team_name: e.target.value })} />

//             <label>Score:</label>
//             <input type="number" className="form-control" value={result.score} onChange={(e) => setResult({ ...result, score: e.target.value })} />

//             <button type="submit" className="btn btn-success mt-3">Update Result</button>
//           </form>
//         </div>
//       )}

//       <div className="text-center mt-5">
//         <button
//           className="btn btn-lg btn-warning fw-bold px-5 py-3"
//           onClick={() => {
//             if (!token) {
//               Swal.fire("Sign-in Required", "Please sign in to register for the tournament.", "warning");
//             } else if (id === tournament?.organizerId?._id) {
//               navigate(`/UpdateTournament/${tournament._id}`);
//             } else {
//               navigate(`/addTeam/${tournament._id}`);
//             }
//           }}
//         >
//           {id === tournament?.organizerId?._id ? "Update Tournament" : "Register"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TournamentById;




//=====================================================================


// import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import url from "../../URL/url.js";
// import { useSelector } from "react-redux";
// import Swal from 'sweetalert2';

// const TournamentById = () => {
//   const params = useParams();
//   const { state } = useLocation();
//   const id = useSelector((state) => state.User.user._id);
//   const role = useSelector((state) => state.User.user.role);
//   const token = useSelector((state) => state.User?.token);

//   const [tournament, setTournament] = useState({});
//   const [result, setResult] = useState({ team_name: "", matchId: "", score: null });
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [status, setStatus] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     getTournamentbyId();
//   }, []);

//   const goToTeamRegistration = (id) => {
//     navigate(`/addTeam/${id}`);
//   };

//   const updateTournament = (id) => {
//     navigate(`/UpdateTournament/${id}`);
//   };

//   const getTournamentbyId = async () => {
//     try {
//       let response = await axios.get(url.tournament.TOURNAMENT_BY_ID + `/tournamentById/${params.id}`);
//       setTournament(response.data.data[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setResult({ ...result, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log("Submitting result for Match ID:", result.matchId);
//       const response = await axios.patch(`http://localhost:3001/match/result/${result.matchId}`, result);
//       setSuccessMessage(response.data.message);
//       setErrorMessage("");
//       setTournament((prevTournament) => {
//         const updatedSchedule = prevTournament.schedule.map((match) => {
//           if (match.matchId?._id === result.matchId) {
//             return {
//               ...match,
//               result: { winnerId: { teamName: result.team_name } },
//             };
//           }
//           return match;
//         });
//         return { ...prevTournament, schedule: updatedSchedule };
//       });
//       setStatus((prevStatus) => ({ ...prevStatus, [result.matchId]: false }));
//       setResult({ team_name: "", matchId: "", score: null });
//     } catch (err) {
//       setErrorMessage(err.response?.data?.err || "Internal server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="container py-4" style={{ backgroundColor: "#f8f9fa" }}>
//       <div className="card shadow-sm p-4 mb-4">
//         <h1 className="text-primary text-center">{tournament.TournamentName}</h1>
//         <h3 className="text-muted text-center">
//           Organized by: <Link to="/OrganizerMyProfile" state={{ id: tournament.organizerId?._id }}>{tournament.organizerId?.name || "N/A"}</Link>
//         </h3>
//       </div>

//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <div className="card p-4">
//             <h4 className="text-primary">Entry Fees & Dates</h4>
//             <p style={{color:"black"}}><strong style={{color:"black"}}>Entry Fees:</strong> {tournament.entry_fees || "0"} rs</p>
//             <p style={{color:"black"}}><strong style={{color:"black"}}>Start Date:</strong> {tournament.startDate ? new Date(tournament.startDate).toLocaleDateString() : "N/A"}</p>
//             <p style={{color:"black"}}><strong style={{color:"black"}}>End Date:</strong> {tournament.endDate ? new Date(tournament.endDate).toLocaleDateString() : "N/A"}</p>
//           </div>
//           <div className="card p-4 mt-4">
//             <h4 className="text-primary">Teams Participating</h4>
//             <ul className="list-group">
//               {tournament.teams?.length ? (
//                 tournament.teams.map((team, index) => (
//                   <li key={index} className="list-group-item">
//                     Team {index + 1} - <Link to={`/Team/${team.teamId?._id}`} className="text-primary">{team.teamId?.teamName || "Unnamed Team"}</Link>
//                   </li>
//                 ))
//               ) : (
//                 <li className="list-group-item text-muted" style={{color:"black"}}>No teams registered yet.</li>
//               )}
//             </ul>
//           </div>
//         </div>
//         <div className="col-md-6 mb-4">
//           <div className="card p-4">
//             <h4 className="text-primary">Tournament Schedule</h4>
//             <ul className="list-group">
//               {tournament.schedule?.length ? (
//                 tournament.schedule.map((match, index) => (
//                   <li key={index} className="list-group-item" style={{color:"black"}}>
//                     <strong style={{color:"black"}}>Match {index + 1}:</strong> {match.matchId?.team1?.teamName || "N/A"} vs {match.matchId?.team2?.teamName || "N/A"}<br />
//                     <small style={{color:"black"}}>{new Date(match.matchId?.date).toLocaleDateString()} | {match.matchId?.venue || "N/A"}</small>
//                     <p style={{color:"black"}}>Winner: {match.result?.winnerId?.teamName}</p>
//                     <p style={{color:"black"}}>Score: {match.result?.score}</p>
//                   </li>
//                 ))
//               ) : (
//                 <li className="list-group-item text-muted">No matches scheduled.</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="text-center">
//         <button className={`btn ${!token ? "btn-warning" : "btn-success"} btn-lg mt-3`} onClick={() => {
//           if (!token) {
//             Swal.fire("Sign-in Required", "Please sign in to register for the tournament.", "warning");
//           } else if (id === tournament?.organizerId?._id) {
//             updateTournament(tournament._id);
//           } else if (tournament.status !== "inactive") {
//             goToTeamRegistration(tournament._id);
//           }
//         }}>
//           {id === tournament?.organizerId?._id ? "Update Tournament" : "Register"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TournamentById;


//==========================================================

import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../URL/url.js";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

const TournamentById = () => {
  const params = useParams();
  const { state } = useLocation();
  const id = useSelector((state) => state.User.user._id);
  const role = useSelector((state) => state.User.user.role);
  const token = useSelector((state) => state.User?.token);

  const [tournament, setTournament] = useState({});
  const [result, setResult] = useState({ team_name: "", matchId: "", score: null });
  const [status, setStatus] = useState({});
  const [showResultForm, setShowResultForm] = useState(false);
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

  return (
    <div style={{ background: "linear-gradient(90deg, #001F3F, #0074D9)", minHeight: "100vh", padding: "40px" }}>
      <h1 className="text-center text-light display-2 font-weight-bold">{tournament.TournamentName}</h1>
      <h4 className="text-center text-light display-6">Organized by: {tournament.organizerId?.name || "N/A"}</h4>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="text-light font-weight-bold">Entry Fees & Dates</h3>
          <p className="fs-4 text-light"><strong>Entry Fees:</strong> {tournament.entry_fees || "0"} Rs</p>
          <p className="fs-4 text-light"><strong>Start Date:</strong> {tournament.startDate ? new Date(tournament.startDate).toLocaleDateString() : "N/A"}</p>
          <p className="fs-4 text-light"><strong>End Date:</strong> {tournament.endDate ? new Date(tournament.endDate).toLocaleDateString() : "N/A"}</p>
        </div>
        
        <div className="col-md-6">
          <h3 className="text-light font-weight-bold">Teams Participating</h3>
          <ul className="fs-4 text-light">
            {tournament.teams?.length ? (
              tournament.teams.map((team, index) => (
                <li key={index}>
                  <strong>Team {index + 1}: </strong>
                  <Link to={`/Team/${team.teamId?._id}`} className="text-warning">
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

      <h3 className="text-light mt-5 font-weight-bold">Tournament Schedule</h3>
      <ul className="fs-4 text-light">
        {tournament.schedule?.length ? (
          tournament.schedule.map((match, index) => (
            <li key={index} className="mb-4 p-4" style={{ background: "#00509E", borderRadius: "10px" }}>
              <p><strong>Match {index + 1}:</strong> {match.matchId?.team1?.teamName || "N/A"} vs {match.matchId?.team2?.teamName || "N/A"}</p>
              <p><strong>MatchId:</strong> {match?.matchId?.matchId || "N/A"}</p>
              <p><strong>Venue:</strong> {match.matchId?.venue || "N/A"}</p>
              <p><strong>Winner:</strong> {match.result?.winnerId?.teamName || "Not decided yet"}</p>
              <p><strong>Score:</strong> {match.result?.score || "N/A"}</p>
              {id === tournament?.organizerId?._id && (
                <button className="btn btn-sm btn-warning mt-2" onClick={() => setShowResultForm(!showResultForm)}>
                  {showResultForm ? "Hide" : "Update Match Result"}
                </button>
              )}
            </li>
          ))
        ) : (
          <li className="text-muted">No matches scheduled.</li>
        )}
      </ul>

      {showResultForm && (
        <div>
          <h3 className="text-light mt-5 font-weight-bold">Update Match Result</h3>
          <form className="fs-4 text-light">
            <label>Match ID:</label>
            <input type="text" className="form-control" value={result.matchId} onChange={(e) => setResult({ ...result, matchId: e.target.value })} />

            <label>Winning Team:</label>
            <input type="text" className="form-control" value={result.team_name} onChange={(e) => setResult({ ...result, team_name: e.target.value })} />

            <label>Score:</label>
            <input type="number" className="form-control" value={result.score} onChange={(e) => setResult({ ...result, score: e.target.value })} />

            <button type="submit" className="btn btn-success mt-3">Update Result</button>
          </form>
        </div>
      )}

      <div className="text-center mt-5">
        <button
          className="btn btn-lg btn-warning fw-bold px-5 py-3"
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
  );
};

export default TournamentById;
