import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WithoutTeam() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWithoutTeam = async () => {
            try {
                const response = await axios.get("http://localhost:3001/player/withoutTeam");
                console.log("API Response:", response.data);
                if (response.data && Array.isArray(response.data)) {
                    setPlayers(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            } catch (err) {
                console.error("Error fetching player data", err);
            }
        };
        fetchWithoutTeam();
    }, []);

    return (
        <>
            <div className="text-decoration-underline text-center mt-5" id="playerContainer">
                <h2>without team</h2>
            </div>
            <div className="container mt-5 p-2">   
                <div className="row">
                    {players?.map((player, index) => (
                        
                        <div key={index} className="col-md-3 p-3">
                            <div
                                className="col md-6 d-flex flex-column"
                                style={{
                                    height: "370px",
                                    boxShadow: "10px 10px 10px gray",
                                    borderRadius: "10px",
                                }}
                            >
                                <img
                                    src={player?.profile_photo || "/user.webp"}
                                    alt={`${player?.name}'s profile`}
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                />
                                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                                    <p>Name: {player?.name}</p>
                                    <p>Skill: {player?.profile?.skills}</p>
                                    <p>Experience: {player?.profile?.experience}</p>
                                    <button className="btn btn-outline-secondary" onClick={() => navigate("/PlayerProfile", { state: { id: player?._id } })}>View More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default WithoutTeam;
