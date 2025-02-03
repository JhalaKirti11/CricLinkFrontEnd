
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export function PlayerMatch() {
    const [matchData, setMatchData] = useState([]);
    const [teamData, setTeamData] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const player = useSelector((state) => state.User.user);

    const token = useSelector((state) => state.User.token);
    const id = useSelector((state) => state.User.user._id);
    const name = useSelector((state) => state.User.user.name);

    console.log("user Data : " + token + " " + id + " " + name);


    useEffect(() => {
        userMatch();
    }, []);


    const userMatch = async () => {
        try {
            const team = await axios.post(`http://localhost:3001/Team/getTeamByUser`, { id: id })
            const teamDataArray = team.data.message;
            if (teamDataArray.length > 0) {
                setTeamData(teamDataArray[0]);
                const teamId = teamDataArray[0]._id;
                console.log("teamId : ", teamId);

                // Now fetch matches based on teamId
                const match = await axios.post(`http://localhost:3001/match/getMatchesByTeam`, { teamId });
                console.log("match data : ", match.data?.data);
                setMatchData(match.data?.data);
            } else {
                console.log("No team found for this user.");
            }


        } catch (error) {
            console.error("Error fetching player's match:", error);
            Swal.fire("Error", "Failed to load player's match.", "error");
        }
    }
    return (
        <>
            <div className="container mt-5">
                <h3 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "40px", color: "#ffffff", textDecoration: "underline" }}>
                    Match Details
                </h3>
    
                {matchData.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered text-center" style={{ backgroundColor: "#fff", borderRadius: "10px", overflow: "hidden" }}>
                            <thead className="table-dark">
                                <tr>
                                    <th>Match ID</th>
                                    <th>Tournament</th>
                                    <th>Team 1</th>
                                    <th>Team 2</th>
                                    <th>Date</th>
                                    <th>Venue</th>
                                    <th>Winner</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchData.map((match, index) => (
                                    <tr key={index} style={{height:"10px"}}>
                                        <td>{match?.matchId}</td>
                                        <td>{match?.tournamentId?.TournamentName || "N/A"}</td>
                                        <td>{match?.team1?.teamName || "N/A"}</td>
                                        <td>{match?.team2?.teamName || "N/A"}</td>
                                        <td>{new Date(match.date).toLocaleString("en", { weekday: "short" })|| "N/A"} : {new Date(match.date).toLocaleDateString()}</td>
                                        <td>{match?.venue || "N/A"}</td>
                                        <td>{match?.result?.winnerId?.teamName || "N/A"}</td>
                                        <td>{match?.result?.score || "N/A"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-light fs-5">No match data available.</p>
                )}
            </div>
        </>
    );
    

}