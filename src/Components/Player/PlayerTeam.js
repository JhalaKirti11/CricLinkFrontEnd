import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import TeamDetailsPage from "../Team/TeamDetails";

const PlayerTeam = () => {
    const id = useSelector((state) => state.User.user._id);
    const navigate = useNavigate();
    const [team, setTeam] = useState({});
    useEffect(() => {
        getMyTeam()
    }, []);

    const getMyTeam = async () => {
        try {
            console.log("Player's team : " + id);
            const response = await axios.get(`http://localhost:3001/Team/getTeamByUser`, { id });
            console.log("response : " + response.data);
            setTeam(response.data);
        } catch (error) {
            console.log("error : " + error);
        }
    }

    return (
        <div className="container mt-3">
            <div className="col-md-8 p-4 text-dark">
                <form>
                    <div className="mb-3">
                        <label>Team Name</label>
                        <input type="text" name="teamName" value={team?.teamName} readOnly className="form-control bg-white text-dark" />
                    </div>
                    <div className="mb-3">
                        <label>Captain Name</label>
                        <input type="text" name="captainId" value={team?.captainId?.name || "N/A"} readOnly className="form-control bg-white text-dark" />
                    </div>
                    {navigate(`/Team/${team._id}`)}
                </form>
            </div>
        </div>
    )
}
export default PlayerTeam;
