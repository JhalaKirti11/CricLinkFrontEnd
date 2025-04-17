import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const CreateTeam = () => {
    const userrole = useSelector((state) => state.User.user.role);
    const [createTeam, setCreateTeam] = useState({ teamName: "", username: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreateTeam({ ...createTeam, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/Team/createTeam", createTeam);
            setSuccessMessage(response.data.message);
            setShowModal(true);
        } catch (err) {
            if (err.response && err.response.data) {
                alert(`Error: ${err.response.data.error}`);
                setCreateTeam({ teamName: "", username: "" });
            } else {
                alert("Internal server error. Please try again later.");
                setCreateTeam({ teamName: "", username: "" });
            }
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        if (userrole === 'player') {
            navigate("/PlayerMyProfile");
        }
        else {
            navigate("/OrganizerProfile");
        }
    };

    return (
        <div className="container my-5 bg-info p-3">
            <h2>Create Team</h2>
            <p>Connect, collaborate, and create – stronger together.</p>
            <form onSubmit={handleFormSubmit} method="post">
                <div className="form-group">
                    <label>Team Name:</label>
                    <input
                        type="text"
                        name="teamName"
                        className="form-control"
                        value={createTeam.teamName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Captain's Name:</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={createTeam.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3 text-white">
                    Create Team
                </button>
            </form>
            {showModal && (
                <div
                    className="modal show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className="modal-dialog">
                        <div
                            className="modal-content"
                            style={{
                                backgroundColor: "#d4edda",
                                border: "1px solid rgb(113, 162, 204)",
                                color: "#155724",
                            }}
                        >
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                            </div>
                            <div className="modal-body">
                                <p>{successMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleModalClose}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
