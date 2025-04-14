import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import './Player.css';

export default function PlayerList() {
  const [PlayerList, setPlayerList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchSkill, setSearchSkill] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const id = useSelector((state) => state.User.user._id);


  useEffect(() => {
    axios
      .get("http://localhost:3001/user/playerList")
      .then((response) => {
        console.log("response*", response);

        setPlayerList(response.data.players);
        setFilteredData(response.data.players);
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
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
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
      transform: "scale(1.05)",
      boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.1)",
    },
    image: {
      height: "120px",
      width: "120px",
      borderRadius: "50%",
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
      <div className="container text-white">
        <div className="d-flex justify-content-end ">
          <button className="btn btn-outline-primary rounded-pill px-4 py-2" onClick={() => navigate("/Players")}>
            View All
          </button>
        </div>
        <div className="scroll-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>

          <div ref={containerRef} className="scroll-container">
            {displayData?.map((player, index) => {
              return (
                id !== player._id && (
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
                )
              );
            })}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
