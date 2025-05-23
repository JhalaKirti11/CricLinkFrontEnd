import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default ({ filteredData }) => {
  const [PlayerList, setPlayerList] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/user/playerList")
      .then((response) => {
        console.log("response.data:", response.data.players);
        setPlayerList(response.data.players);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
      });
  }, []);

  let navigate = useNavigate();
  filteredData = filteredData?.length ? filteredData : PlayerList;

  return (
    <>
      <div className="text-decoration-underline" id="playerContainer">
        <h2 className="text-center mb-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "40px", color: "#ffffff", textDecoration: "underline", }}>PLAYERS</h2>
      </div>
      <div className="container text-center d-flex justify-content-around flex-wrap gap-5 mt-3">
        {filteredData?.map((player, index) => {
          const id = player._id;
          console.log(id);

          return (
            <div
              key={index}
              className="card col-md-2 col-sm-2 bg-dark"
              id="player"
            >
              <img
                src={player?.profile_photo ? player?.profile_photo : `/assets/highlights/userIcon.jpg`}
                className="card-img-top"
                style={{ height: "12rem" }}
                alt="Player"
              />
              <div className="card-body">
                <h5
                  className="card-title text-nowrap"
                  style={{ color: "#ffffff" }}
                >
                  {player.name}
                </h5>
                <p className="card-text text-white">
                  <strong className="text-white">Email:</strong> {player.email || "N/A"}
                  <br />
                  <strong className="text-white">Role:</strong> {player.role}
                </p>
                <button
                  className="btn btn-outline-secondary mb-1"
                  onClick={() => {
                    console.log(
                      "Navigating to PlayerProfile with player:",
                      player
                    );
                    setSelectedPlayerId(id);
                    navigate("/PlayerProfile", { state: { id } });
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
