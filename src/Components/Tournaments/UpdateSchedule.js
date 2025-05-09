import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import url from "../../URL/url.js";

export function UpdateSchedule() {
    const params = useParams();
    console.log("this is params.id : "+params.id);
    const [formData, setFormData] = useState({
        matchId: "",
        tournamentId: params.id,
        team1_name: "",
        team2_name: "",
        venue: "",
        winner: {},
        score: "",
        date: "",
    });
    
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log("form data : " + formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("tournament schedule updating : " + params.id)
            const response = await axios.post(url.tournament.ADD_MATCH + `/createMatches`, formData);
            console.log("response : " + response.data.message)
            matchAddToTournament(formData.matchId);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || "Error occurred.");
            } else {
                alert("Network error. Please try again.");
            }
        }
    };

    const matchAddToTournament = async (matchId) => {
        try {
            console.log("match id in adding to tournament : " + matchId);
                const response = await axios.patch(url.tournament.TOURNAMENT_BY_ID + `/updateTournament/${params.id}`,  { matchId: matchId } );
                console.log("response : " + response?.data);
                alert(`match schedule successfully: ${response?.data}`);

        } catch (error) {
            console.log(error);
            alert('Match Not scheduled');
            }
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto"}}>
            <h2>Update Tournament Schedule</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="tournamentId">Match ID:</label>
                    <input
                        type="text"
                        name="matchId"
                        value={formData.matchId}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", color:"black"}}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="matchId">Team 1:</label>
                    <input
                        type="text"
                        name="team1_name"
                        value={formData.team1_name}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", color:"black" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="matchId">Team 2 :</label>
                    <input
                        type="text"
                        name="team2_name"
                        value={formData.team2_name}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", color:"black" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="matchId">Date :</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", color:"black" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="matchId">Venue :</label>
                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", color:"black" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        padding: "10px",
                        border: "none",
                        cursor: "pointer",
                    }}>
                    Update Schedule
                </button>
            </form>
        </div>
    );
}
