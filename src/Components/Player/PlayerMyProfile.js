import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import UpcomingEvent from "../HomePage/UpcomingEvents";
import Players from "../HomePage/Player";
import Teams from "../HomePage/Teams";
import { signOut } from "../../redux-config/UserSlice";

function LeftSidebar() {
  const [selectedPlayerId, setSelectedPlayerId] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const player = useSelector((state) => state.User.user);
  const token = useSelector((state) => state.User.token);
  const name = useSelector((state) => state.User.user.name);
  const contact = useSelector((state) => state.User.user.contact);
  const email = useSelector((state) => state.User.user.email);
  const experience = useSelector((state) => state.User.user.profile?.experience);
  const skill = useSelector((state) => state.User.user.profile?.skills);
  const location = useSelector((state) => state.User.user.profile?.location);
  const id = useSelector((state) => state.User.user._id);
  const role = useSelector((state) => state.User.user.role)

  const profile_photo = useSelector((state) => state.User.user.profile_photo);
  console.log("=================<<<<<<<<<>>>>>>==================");
  console.log(token);
  console.log(id);
  console.log(name);
  console.log(contact);
  console.log(email);
  console.log(player);
  console.log(role)
  console.log(experience);
  console.log(skill);
  console.log(location);
  console.log(profile_photo);
  console.log("=================<<<<<<<<<>>>>>>==================");

  return (
    <>
      <div
        className="offcanvas offcanvas-start p-5 text-dark "
        tabIndex="-1"
        id="leftSidebar"
        aria-labelledby="leftSidebarLabel"
        style={{ width: "350px" }}
      >
        <button
          type="button"
          className="btn-close btn-close-black"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <div className="offcanvas-header ps-5" >
          {profile_photo ? (
            <img
              src={profile_photo}
              id="logo"
              alt="User Profile"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("Navigating to PlayerProfile with player:", player);
                setSelectedPlayerId(id);
                navigate("/PlayerProfile", { state: { id } });
              }}
            />
          ) : (
            <img
              src="assets/cricket1.webp"
              id="logo"
              alt="Default Logo"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("Navigating to PlayerProfile with player:", player);
                setSelectedPlayerId(id);
                navigate("/PlayerProfile", { state: { id } });
              }}
            />
          )}
        </div>
        <div className="offcanvas-body ps-5 ">
          <h4 className="mt-3 text-dark">{name ? name : "Guest User"}</h4>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 " >
            <li className="nav-item" >
              <button
                className="nav-link active text-dark"
                onClick={() => {
                  console.log("Navigating to PlayerProfile with player ID:", id);
                  setSelectedPlayerId(id);
                  navigate("/PlayerProfile", { state: { id } });
                }}

                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                My Profile
              </button>
            </li>
            <li className="nav-item ">
              <HashLink className="nav-link text-dark" to="/About"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/Players"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                Players
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/myTeam"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                My Team
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/UpcomingTournamentsCards"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                Tournament
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/TeamsPage"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                Teams
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/WithoutTeam"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                Player Without Team
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-dark" to="/ContactUs"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textTransform: "capatialize",
                  textAlign: "center",
                  margin: "10px 0",
                  cursor: "pointer",
                  width: "100%",
                  textDecoration: "",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-auto">
          <button
            className="btn btn-danger w-75 mt-4"
            onClick={() => {
              console.log("Logging out...");
              dispatch(signOut());
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
export default function Header({ setSearchedList }) {
  let navigate = useNavigate();
  const [selectedPlayerId, setSelectedPlayerId] = useState({});
  const id = useSelector((state) => state.User.user._id);
  return (
    <>
      <nav
        className="navbar navbar-dark sticky-top p-3"
        style={{
          background: "linear-gradient(90deg, #001a4d, #002366)",
          color: "#ffffff",
          borderBottom: "2px solid #ffffff",
          height: "70px",
        }}
      >
        <div className="container-fluid" >
          <LeftSidebar />
          <div className="col-md-1 col-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#leftSidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-md-2 col-1 offset-2 offset-md-2 d-flex justify-content-center" >
            <div className="col-md-2 col-1 offset-2 offset-md-2 d-flex justify-content-center">
              <i
                className="btn fa-solid fa-bell fa-xl"
                style={{ color: "#ffffff", marginTop: "10px" }}
                onClick={() => navigate("/AllNotifications")}>
              </i>
              <button className="btn btn-primary" style={{ marginRight: '20px' }}
                onClick={() => navigate(`/UpdateProfileForm/${id}`)}
              >
                Update
              </button>
              <button
                className="btn btn-success "
                onClick={() => navigate("/CreateTeam")}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ background: 'linear-gradient(90deg, #002366, #ffffff)' }}>
        <Players filteredData={[]} />
        <Teams />
        <h3 className="text-center mb-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "40px", color: "#ffffff", textDecoration: "underline", }}>Upcoming Events</h3>
        <UpcomingEvent />
      </div>
    </>
  );
}
