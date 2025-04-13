import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const PlayerNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [message, setMessage] = useState("");
    const userId = useSelector((state) => state.User.user._id);
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getNotifications();
    }, []);

    const getNotifications = async () => {
        try {
            let response = await axios.get(`http://localhost:3001/Team/notification/${userId}`);
            console.log("Notifications: ", response.data);
            setNotifications(response.data.message);
        } catch (error) {
            console.log("Error in getting notifications " + error);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get("http://localhost:3001/Team/viewteam"); 
            console.log("response",response.data)
            setTeams(response.data.Team);
            console.log("iiiiiiiiiiiiiiiiiiiii",response.data.Team)
        } catch (error) {
            console.log("Error fetching teams: ", error);
        }
    };

   const ReqAccepted = async (userId, senderId,receiverId) => {
        try {
            const team = teams.find((team) => team?.captainId._id === userId||team?.captainId._id===senderId);
                       const teamId = team ? team._id : null;
                       if(!teamId){
                        console.log("team is not found")
                       }
                       const playerId = team?.captainId._id === userId ? senderId : receiverId;
                       console.log("playerid",playerId)
            const status = "accepted";
            const response = await axios.put("http://localhost:3001/Team/req-res", {
                status,
                playerId,
                teamId,
            });

            if (response.status === 200) {
                setMessage("Request accepted");
                alert("Request accepted!");

                // Update notification status for both captain and player
                setNotifications((prevNotifications) => 
                    prevNotifications?.map((notice) => {
                        if (notice?.senderId?._id === senderId && notice?.receiverId?._id === userId) {
                            return { ...notice, status: "accepted" };
                        }
                        return notice;
                    })
                );
            }
        } catch (error) {
            console.log("Error in accepting request: ", error);
        }
    };

    const ReqRejected = async (userId, senderId,receiverId) => {
        try {
            const team = teams.find((team) => team?.captainId._id === userId);
            const teamId = team ? team._id : null;
            if(!teamId){
             console.log("team is not found")
            }
            const playerId = team?.captainId?._id === userId ? senderId : receiverId;
            console.log(playerId);
            const status = "rejected";
            const response = await axios.put("http://localhost:3001/Team/req-res", {
                status,
                playerId,
                teamId,
            });
            console.log("//////////////////////",teamId)

            if (response.status === 200) {
                setMessage("Request rejected");
                alert("Request rejected!");

                // Update notification status for both captain and player
                setNotifications((prevNotifications) => 
                    prevNotifications?.map((notice) => {
                        if (notice?.senderId?._id === senderId && notice?.receiverId?._id === userId) {
                            return { ...notice, status: "rejected" };
                        }
                        return notice;
                    })
                );
            }
        } catch (error) {
            console.log("Error in rejecting request: ", error);
        }
    };


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-light">Your Notifications</h2>
            {message && (
                <div className="alert alert-success text-center" role="alert">
                    {message}
                </div>
            )}
            <div>
                {notifications?.length === 0 ? (
                    <div className="text-center mt-4">
                        <div className="alert alert-info" role="alert">
                            No notifications available at the moment.
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {notifications?.map((notice, index) => {
                            const isReceiver = notice?.receiverId?._id === userId; // Check if user is the receiver

                            // Identify teamId based on notification context
                            const teamId = notice?.teamId || (notice?.senderId?.teamId || notice?.receiverId?.teamId);

                            return (
                                <div key={notice?._id || notice?.senderId?._id} className="col-md-4 mb-4">
                                    <div className="card shadow-sm" style={{ backgroundColor: "white", borderLeft: "4px solid #007bff" }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">Notification Type: {notice?.type}</h5>
                                            {notice?.senderId && <p className="mb-1" style={{ fontSize: "1rem" }}><strong>Sender:</strong> {notice?.senderId?.name}</p>}
                                            {notice?.receiverId && <p className="mb-1" style={{ fontSize: "1rem" }}><strong>Receiver:</strong> {notice?.receiverId?.name}</p>}
                                            <p className="card-text"><strong>Message:</strong> {notice?.message}</p>
                                            <p className="card-text text-muted"><strong>Status:</strong> {notice?.status}</p>

                                            {/* Display accept/reject buttons only if user is the receiver */}
                                            {notice?.status === "pending" && isReceiver && (
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-success btn-sm me-2"
                                                        onClick={() => ReqAccepted(userId, notice?.senderId?._id,notice?.receiverId?._id)}
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => ReqRejected(userId, notice?.senderId?._id,notice?.receiverId?._id)}
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};



//PlayerNotifications.js
