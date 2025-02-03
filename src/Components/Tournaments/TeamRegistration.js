import axios from "axios";
import url from "../../URL/url.js";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const TeamRegister = () => {
    const [formData, setFormData] = useState({ team_name: "", captainEmail: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const id = useSelector((state) => state.User.user._id);
    const params = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.patch(url.tournament.TOURNAMENT_BY_ID + `/addTeam/${params.id}`, formData);
            setSuccessMessage(response.data.message);
            setErrorMessage("");
        } catch (err) {
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data.err);
            } else {
                setErrorMessage("Internal server error. Please try again later.");
            }
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(90deg, #001F3F, #0074D9)", minHeight: "100vh", padding: "40px" }}>
            <div className="card shadow-lg border-0 rounded-3 text-dark p-4" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="text-center text-primary mb-4">Tournament Registration Form</h2>
                {successMessage && <p className="alert alert-success">{successMessage}</p>}
                {errorMessage && <p className="alert alert-danger">Sorry! {errorMessage}</p>}
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Team Name</label>
                        <input type="text" name="team_name" className="form-control" value={formData.team_name} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Captain's Name</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Captain Email ID</label>
                        <input type="email" name="captainEmail" className="form-control" value={formData.captainEmail} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">All Player's Names</label>
                        <textarea className="form-control" rows="3" required></textarea>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamRegister;
