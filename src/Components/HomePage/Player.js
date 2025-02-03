import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Player.css'; // Corrected import


const PlayerList = ({ filteredData }) => {
  const [playerList, setPlayerList] = useState([]);
  const containerRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/playerList")
      .then((response) => {
        setPlayerList(response.data.players);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
      });
  }, []);

  // Use filtered data if available; otherwise, use full player list
  const displayData = filteredData?.length ? filteredData : playerList;

  // Scroll Functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="text-center" id="playerContainer" >
        <h2 className="player-title">Players</h2>
      </div>
      <div className="container text-white">
      <div className="d-flex justify-content-end ">
    <button className="btn btn-outline-primary rounded-pill px-4 py-2" onClick={() => navigate("/Players")}>
        View All
    </button>
</div>

      {/* <button className='btn btn-primary' onClick={navigate("/Players")}>View More</button> */}

      <div className="scroll-wrapper">
        {/* Left Scroll Button */}
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>

        {/* Scrollable Player List */}
        <div ref={containerRef} className="scroll-container">
          {displayData?.map((player, index) => {
            return (
              <div key={player._id || index} className="player-card" >
                <img src={player?.profile_photo ? player?.profile_photo : `/assets/highlights/userIcon.jpg`} alt="{player?.name}" className="player-image" />
                <div className="player-info">
                  <h5>{player?.name}</h5>
                  <h3 style={{color:"black"}}>{player?.profile?.skills}</h3>
                  <p style={{color:"black"}}>Experience : {player?.profile?.experience}</p>
                  <p>Nationality: India</p>
                  <button
                    className="view-button btn-info"
                    onClick={() => navigate("/PlayerProfile", { state: { id: player._id } })}>
                    View More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      </div>
    </>
  );
};

export default PlayerList;

//===========================================================

// import axios from "axios";
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import './Player.css'; // Corrected import

// const PlayerList = ({ filteredData }) => {
//   const [playerList, setPlayerList] = useState([]);
//   const [position, setPosition] = useState("Player");
//   const containerRef = useRef(null);
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/user/playerList")
//       .then((response) => {
//         setPlayerList(response.data.players);
//         playerList?.map((player, index) => {
//           console.log("player id : "+ player._id +" "+ player.name)
//         getPosition(player._id)
//       })
//       })
//       .catch((err) => {
//         console.error("Error fetching players:", err);
//       });
//   }, []);

//   const getPosition = async (userId) => {
//     try {
//       const team = await axios.post(`http://localhost:3001/Team/getTeamByUser`, { id: userId });
//       const teamDataArray = team.data.message;
//       console.log("array : "+ teamDataArray);
//       if (teamDataArray.length > 0) {
//         teamDataArray.map((teamData, index)=>{
//           const teamId = teamData._id;
//           console.log("teamId : ", teamId);
//           const captain = teamData?.captainId?._id;
//           console.log("captain : "+ captain +" "+ userId);
//           if (captain === userId) {
//             setPosition("Captain");
//           }
//           console.log("position : "+ position)
//         })
          


     
//     } 
//   }catch (error) {
//       console.log("Error : " + error);
//     }
//   }

//   const displayData = filteredData?.length ? filteredData : playerList;

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <div className="player-list-container">
//         <h2 className="player-title">Players</h2>
//         <div className="scroll-buttons">
//           <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
//           <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
//         </div>
//         <div ref={containerRef} className="player-list-scroll">
//           {displayData?.map((player, index) => (
//             <div key={player._id || index} className="player-card">
//               <img
//                 src={player?.profile_photo || "/assets/highlights/userIcon.jpg"}
//                 alt={player?.name}
//                 className="player-image"
//               />
//               <div className="player-card-info">
//                 <h3 className="player-name">{player?.name}</h3>
//                 <p className="player-stats"> {player?.profile?.skills || null}</p>
//                 <p className="player-stats">Experience: {player?.profile?.experience || 0}</p>
//                 <p className="player-stats">{player?.profile?.location || null}</p>
//                 <p className="player-stats">Position: {position || "Unknown"}</p>
//                 <button className="view-button" onClick={() => navigate("/PlayerProfile", { state: { id: player._id } })}>
//                   View More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlayerList;
