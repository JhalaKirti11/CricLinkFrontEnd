// import { useEffect, useState } from "react";
// import axios from "axios";
// import url from "../../URL/url.js";
// import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import { useSelector } from "react-redux";

// function UpcomingTournamentsCards() {
//     const [activetournament, setactiveTournament] = useState([]);
//     const [inactivetournament, setinactiveTournament] = useState([]);
//     const navigate = useNavigate();
//     const token = useSelector((state) => state.User?.token);
//     const role = useSelector((state) => state.User.user.role);

//     useEffect(() => {
//         activeTournamentList();
//         inactiveTournamentList();
//     }, []);

//     const activeTournamentList = async () => {
//         try {
//             let response = await axios.get(url.tournament.TOURNAMENT_LIST);
//             let tournaments = response.data.tournaments.filter((tourna) => tourna.status === "active")
//                 .sort((first, second) => new Date(first.startDate) - new Date(second.startDate));
//             setactiveTournament(tournaments);
//         } catch (err) {
//             console.log(err.message);
//         }
//     };
    
//     const inactiveTournamentList = async () => {
//         try {
//             let response = await axios.get(url.tournament.TOURNAMENT_LIST);
//             let tournaments = response.data.tournaments.filter((tourna) => tourna.status === "inactive")
//                 .sort((first, second) => new Date(first.startDate) - new Date(second.startDate));
//             setinactiveTournament(tournaments);
//         } catch (err) {
//             console.log(err.message);
//         }
//     };

//     const navigateToById = (id) => {
//         navigate(`/tournamentById/${id}`);
//     };

//     const navigateToRegister = (id) => {
//         navigate(`/addTeam/${id}`);
//     };

//     return (
//         <div className="container mt-4" style={{ color: '#333', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
//             <h1 className="text-center mb-4 text-primary" style={{ fontSize: '2.5rem', textDecoration: 'underline' }}>Upcoming Events</h1>
//             <div className="container mt-5" id="tournamentContainer">
//                 {activetournament.map((tourna) => (
//                     <div className="row event-row mb-4 p-3 shadow-sm rounded bg-white" key={tourna._id}>
//                         <div className="col-2 text-center align-self-center">
//                             <h2 className="text-secondary">{new Date(tourna.startDate).toLocaleString("en", { weekday: "short" })}</h2>
//                             <h2 className="text-dark">{new Date(tourna.startDate).getDate()}</h2>
//                         </div>
//                         <div className="col-8">
//                             <span className="text-muted" style={{ fontSize: '1rem' }}>
//                                 {new Date(tourna.startDate).toLocaleDateString()} - {new Date(tourna.endDate).toLocaleDateString()}
//                             </span>
//                             <h2 className="text-dark" style={{ cursor: 'pointer' }} onClick={() => navigateToById(tourna._id)}>
//                                 {tourna.TournamentName}
//                             </h2>
//                             <h5 className="text-muted">Organizer: {tourna.organizerId.name}</h5>
//                             <p>{tourna.address}</p>
//                             <p>{tourna.description || "Tournament details coming soon."}</p>
//                             <h3 className="text-success">&#8377; {tourna.entry_fees}</h3>
//                             <button className="btn btn-outline-primary btn-sm me-2" onClick={() => navigateToById(tourna._id)}>Details</button>
//                             {!token ? (
//                                 <button className="btn btn-outline-success btn-sm" onClick={() => Swal.fire("Sign-in Required", "Please sign in to register.", "warning")}>Register</button>
//                             ) : role === "organizer" ? null : (
//                                 <button className="btn btn-success btn-sm" onClick={() => navigateToRegister(tourna._id)}>Register</button>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <h1 className="text-center mb-4 text-primary" style={{ fontSize: '2.5rem', textDecoration: 'underline' }}>Completed Events</h1>
//             <div className="container mt-5" id="tournamentContainer">
//                 {inactivetournament.map((tourna) => (
//                     <div className="row event-row mb-4 p-3 shadow-sm rounded bg-light" key={tourna._id}>
//                         <div className="col-2 text-center align-self-center">
//                             <h2 className="text-secondary">{new Date(tourna.startDate).toLocaleString("en", { weekday: "short" })}</h2>
//                             <h2 className="text-dark">{new Date(tourna.startDate).getDate()}</h2>
//                         </div>
//                         <div className="col-8">
//                             <span className="text-muted" style={{ fontSize: '1rem' }}>
//                                 {new Date(tourna.startDate).toLocaleDateString()} - {new Date(tourna.endDate).toLocaleDateString()}
//                             </span>
//                             <h2 className="text-dark" style={{ cursor: 'pointer' }} onClick={() => navigateToById(tourna._id)}>
//                                 {tourna.TournamentName}
//                             </h2>
//                             <h5 className="text-muted">Organizer: {tourna.organizerId.name}</h5>
//                             <p>{tourna.address}</p>
//                             <h3 className="text-success">&#8377; {tourna.entry_fees}</h3>
//                             <button className="btn btn-outline-primary btn-sm" onClick={() => navigateToById(tourna._id)}>View</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default UpcomingTournamentsCards;
//===============================================================================



import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../URL/url.js";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";

function UpcomingTournamentsCards() {
    const [activetournament, setactiveTournament] = useState([]);
    const [inactivetournament, setinactiveTournament] = useState([]);
    const navigate = useNavigate();
    const token = useSelector((state) => state.User?.token);
    const role = useSelector((state) => state.User.user.role);

    useEffect(() => {
        activeTournamentList();
        inactiveTournamentList();
    }, []);

    const activeTournamentList = async () => {
        try {
            let response = await axios.get(url.tournament.TOURNAMENT_LIST);
            let tournaments = response.data.tournaments.filter((tourna) => tourna.status === "active")
                .sort((first, second) => new Date(first.startDate) - new Date(second.startDate));
            setactiveTournament(tournaments);
        } catch (err) {
            console.log(err.message);
        }
    };

    const inactiveTournamentList = async () => {
        try {
            let response = await axios.get(url.tournament.TOURNAMENT_LIST);
            let tournaments = response.data.tournaments.filter((tourna) => tourna.status === "inactive")
                .sort((first, second) => new Date(first.startDate) - new Date(second.startDate));
            setinactiveTournament(tournaments);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div style={{ background: "linear-gradient(90deg, #002366, #ffffff)", width: "100%", padding: "50px 0" }}>
            <h1 className="text-center text-light mb-5" style={{ textDecoration: 'underline', fontSize: '3.5rem', fontWeight: 'bold' }}>Upcoming Events</h1>
            {activetournament.map((tourna) => (
                <div className="row event-row mb-5 p-5" key={tourna._id} style={{ maxWidth: "95%", margin: "auto", background: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    <div className="col-2 text-center align-self-center text-white py-5" style={{ background: "#002366", fontSize: "2rem", borderRadius: "10px 0 0 10px" }}>
                        <h3>{new Date(tourna.startDate).toLocaleString("en", { weekday: "short" })}</h3>
                        <h2>{new Date(tourna.startDate).getDate()}</h2>
                    </div>
                    <div className="col-8 px-5">
                        <h2 className="text-dark" style={{ cursor: 'pointer', fontSize: '2.8rem', fontWeight: 'bold' }} onClick={() => navigate(`/tournamentById/${tourna._id}`)}>
                            {tourna.TournamentName}
                        </h2>
                        <h4 className="text-muted">Organizer: {tourna.organizerId.name}</h4>
                        <p style={{ fontSize: '1.8rem', fontWeight: '500' }}>{tourna.address}</p>
                        <p style={{ fontSize: '1.6rem', color: '#444' }}>{tourna.description || "Tournament details coming soon."}</p>
                        <h3 className="text-success" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Entry Fee: &#8377; {tourna.entry_fees}</h3>
                        <div className="mt-4">
                            <button className="btn btn-outline-dark me-3" style={{ fontSize: '1.6rem', padding: '10px 20px' }} onClick={() => navigate(`/tournamentById/${tourna._id}`)}>Explore More</button>
                            {!token ? (
                                <button className="btn btn-success" style={{ fontSize: '1.6rem', padding: '10px 20px' }} onClick={() => Swal.fire("Sign-in Required", "Please sign in to register.", "warning")}>Register</button>
                            ) : role === "organizer" ? null : (
                                <button className="btn btn-primary" style={{ fontSize: '1.6rem', padding: '10px 20px' }} onClick={() => navigate(`/addTeam/${tourna._id}`)}>Register</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <h1 className="text-center text-light mt-5 mb-5" style={{ textDecoration: 'underline', fontSize: '3.5rem', fontWeight: 'bold' }}>Completed Events</h1>
            {inactivetournament.map((tourna) => (
                <div className="row event-row mb-5 p-5" key={tourna._id} style={{ maxWidth: "95%", margin: "auto", background: "rgba(200, 200, 200, 0.9)", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    <div className="col-2 text-center align-self-center text-white py-5" style={{ background: "#555", fontSize: "2rem", borderRadius: "10px 0 0 10px" }}>
                        <h3>{new Date(tourna.startDate).toLocaleString("en", { weekday: "short" })}</h3>
                        <h2>{new Date(tourna.startDate).getDate()}</h2>
                    </div>
                    <div className="col-8 px-5">
                        <h2 className="text-dark" style={{ fontSize: '2.8rem', fontWeight: 'bold' }}>{tourna.TournamentName}</h2>
                        <h4 className="text-muted">Organizer: {tourna.organizerId.name}</h4>
                        <p style={{ fontSize: '1.8rem', fontWeight: '500' }}>{tourna.address}</p>
                        <p style={{ fontSize: '1.6rem', color: '#444' }}>{tourna.description || "Tournament details coming soon."}</p>
                        <h3 className="text-danger" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Completed</h3>
                        <button className="btn btn-outline-dark me-3" style={{ fontSize: '1.6rem', padding: '10px 20px' }} onClick={() => navigate(`/tournamentById/${tourna._id}`)}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingTournamentsCards;
