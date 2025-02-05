//========================2=================================
// 
//  import axios from "axios";
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import './Player.css'; // Corrected import


// const PlayerList = () => {
//   const [playerList, setPlayerList] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchSkill, setSearchSkill] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);


//   const containerRef = useRef(null);
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/user/playerList")
//       .then((response) => {
//         setPlayerList(response.data.players);
//         setFilteredData(response.data.players);

//       })
//       .catch((err) => {
//         console.error("Error fetching players:", err);
//       });
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchSkill);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchSkill]);

//   useEffect(() => {
//     if (!debouncedSearch) {
//       setFilteredData(PlayerList);
//       return;
//     }

//     const filtered = PlayerList?.filter((player) => {
//       const skills = player?.profile?.skills?.toLowerCase() || "";
//       const height = player?.profile?.height?.toString() || "";
//       return skills.includes(debouncedSearch) || height.includes(debouncedSearch);
//     });

//     setFilteredData(filtered);
//   }, [debouncedSearch, PlayerList]);



//   // Use filtered data if available; otherwise, use full player list
//   const displayData = filteredData?.length ? filteredData : playerList;

//   // Scroll Functions
//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   }

//       // 🌟 Stylish CSS Object
//   const styles = {
//     searchWrapper: {
//       position: "relative",
//       display: "flex",
//       alignItems: "center",
//     },
//     searchIcon: {
//       fontSize: "24px",
//       cursor: "pointer",
//       color: "white",
//       margin: "10px",
//     },
//     searchInput: {
//       width: showSearch ? "300px" : "0",
//       opacity: showSearch ? "1" : "0",
//       padding: "8px",
//       borderRadius: "50px",
//       border: "1px solid #ccc",
//       transition: "width 0.4s ease-in-out, opacity 0.3s ease-in-out",
//       backgroundColor: "#032B44",
//       color: "white",
//       outline: "none",
//       position: "absolute",
//       left: "30px",

//     }
//   }


//   return (
//     <>
//       <div className="text-center" id="playerContainer" >
//         <h2 className="player-title">Players</h2>
//         <div
//           style={styles.searchWrapper}
//           onMouseEnter={() => setShowSearch(true)}
//           onMouseLeave={() => setShowSearch(false)}
//         >
//           <FaSearch style={styles.searchIcon} />
//           <input
//             type="text"
//             style={styles.searchInput}
//             placeholder="Search by skill (e.g., Bowler, Batsman, Height)"
//             value={searchSkill}
//             onChange={(e) => setSearchSkill(e.target.value.toLowerCase())}
//           />
//         </div>
//       </div>



//================================================================
//       <div className="container text-white">
//       <div className="d-flex justify-content-end ">
//     <button className="btn btn-outline-primary rounded-pill px-4 py-2" onClick={() => navigate("/Players")}>
//         View All
//     </button>
// </div>

//       {/* <button className='btn btn-primary' onClick={navigate("/Players")}>View More</button> */}

//       <div className="scroll-wrapper">
//         {/* Left Scroll Button */}
//         <button className="scroll-button left" onClick={scrollLeft}>
//           &lt;
//         </button>

//         {/* Scrollable Player List */}
//         <div ref={containerRef} className="scroll-container">
//           {displayData?.map((player, index) => {
//             return (
//               <div key={player._id || index} className="player-card" >
//                 <img src={player?.profile_photo ? player?.profile_photo : `/assets/highlights/userIcon.jpg`} alt="{player?.name}" className="player-image" />
//                 <div className="player-info">
//                   <h5>{player?.name}</h5>
//                   <h3 style={{color:"black"}}>{player?.profile?.skills}</h3>
//                   <p style={{color:"black"}}>Experience : {player?.profile?.experience}</p>
//                   <p>Nationality: India</p>
//                   <button
//                     className="view-button"
//                     onClick={() => navigate("/PlayerProfile", { state: { id: player._id } })}>
//                     View More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right Scroll Button */}
//         <button className="scroll-button right" onClick={scrollRight}>
//           &gt;
//         </button>
//       </div>
//       </div>
//     </>
//   );
// };

// export default PlayerList;

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

//=======================3=================================

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Search Icon
import './Player.css';


export default function PlayerList() {
  const [PlayerList, setPlayerList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchSkill, setSearchSkill] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Add state for hover effect
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/playerList")
      .then((response) => {
        console.log("response*", response);

        setPlayerList(response.data.user);
        setFilteredData(response.data.user);
      })
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  const containerRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchSkill);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchSkill]);

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredData(PlayerList);
      return;
    }

    const filtered = PlayerList?.filter((player) => {
      const skills = player?.profile?.skills?.toLowerCase() || "";
      const height = player?.profile?.height?.toString() || "";
      return skills.includes(debouncedSearch) || height.includes(debouncedSearch);
    });

    setFilteredData(filtered);
  }, [debouncedSearch, PlayerList]);

   const displayData = filteredData?.length ? filteredData : PlayerList;
  

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
    }

  // 🌟 Stylish CSS Object
  const styles = {
    playerContainer: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)", // Transparent glass effect
      backdropFilter: "blur(10px)", // Blurry glass effect
      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)", // Soft shadow
      color: "white",
      padding: "20px",
      borderRadius: "15px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      width: "250px",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cardHover: {
      transform: "scale(1.05)", // Pop-out effect
      boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.1)",
    },
    image: {
      height: "120px",
      width: "120px",
      borderRadius: "50%", // Circular image
      border: "3px solid white",
      objectFit: "cover",
    },
    btn: {
      background: "#ffcc00",
      color: "black",
      border: "none",
      padding: "8px 15px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    btnHover: {
      background: "lavender",
    },
    searchWrapper: {
      position: "relative",
      display: "flex",
      color: "white",
      alignItems: "center",
    },
    searchIcon: {
      fontSize: "24px",
      cursor: "pointer",
      color: "white",
      margin: "10px",
    },
    searchInput: {
      width: showSearch ? "300px" : "0",
      opacity: showSearch ? "1" : "0",
      padding: "8px",
      borderRadius: "50px",
      border: "1px solid #ccc",
      transition: "width 0.4s ease-in-out, opacity 0.3s ease-in-out",
      backgroundColor: "#032B44",
      color: "white",
      outline: "none",
      position: "absolute",
      left: "30px",
    },
  };

  return (
    <>
      {/* 🌟 Players Heading with Search Bar */}
      <div style={styles.playerContainer}>
        <h2 style={{ color: "white" }}>PLAYERS</h2>
        <div
          style={styles.searchWrapper}
          onMouseEnter={() => setShowSearch(true)}
          onMouseLeave={() => setShowSearch(false)}
        >
          <FaSearch style={styles.searchIcon} />
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search by skill (e.g., Bowler, Batsman, Height)"
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      {/* 🌟 Player Cards Container */}
      {/* <div className="container text-center d-flex justify-content-around flex-wrap gap-5 mt-3">
        {filteredData?.length > 0 ? (
          filteredData.slice(0, 8).map((player, index) => {
            return (
              <div
                key={index}
                style={hoveredCard === index ? { ...styles.card, ...styles.cardHover } : styles.card}
                onMouseEnter={() => setHoveredCard(index)} // Set hovered state
                onMouseLeave={() => setHoveredCard(null)} // Reset hovered state
              >
                <img src={player.profile_photo || `/assets/highlights/userIcon.jpg`} style={styles.image} alt="Player" />
                <h5 className="card-title text-nowrap">{player.name}</h5>
                <p>
                  <strong>Role:</strong> {player.role} <br />
                  <strong>Skill:</strong> {player.profile?.skills} <br />
                  <strong>Email:</strong> {player.email || "N/A"} <br />
                  <strong>Contact:</strong> {player.contact || "N/A"}
                </p>
                <button
                  style={hoveredButton ? { ...styles.btn, ...styles.btnHover } : styles.btn}
                  onMouseEnter={() => setHoveredButton(true)} // Set hovered state for button
                  onMouseLeave={() => setHoveredButton(false)} // Reset hovered state for button
                  onClick={() => navigate("/PlayerProfile", { state: { id: player._id } })}
                >
                  View More
                </button>
              </div>
            );
          })
        ) : (
          <p style={{ color: "red" }}>No players found with the given search!</p>
        )}
      </div> */}

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
                    <h3 style={{ color: "black" }}>{player?.profile?.skills}</h3>
                    <p style={{ color: "black" }}>Experience : {player?.profile?.experience}</p>
                    <p>Nationality: India</p>
                    <button
                      className="view-button"
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
}
