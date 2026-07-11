import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux-config/UserSlice";
import PlayerProfile from "./Player/PlayerProfile.js";
import OrganizerProfile from "./Team/TeamDetails.js";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

export default function Header({ setSearchedList }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.User);

  const handleLogout = () => {
    dispatch(signOut());
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const profile = () => {
    if (sessionStorage.getItem("isLoggedIn")) {
      let userRole = sessionStorage.getItem("currentUser");
      if (userRole === "player") {
        return <PlayerProfile />;
      } else if (userRole === "organizer") {
        return <OrganizerProfile />;
      } else {
        return <h1>Admin Profile</h1>;
      }
    } else {
      navigate("/signIn");
    }
  };

  const isUserLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <>
      <nav className="navbar-custom navbar-dark sticky-top">
        <div className="navbar-container">
          {/* Left Sidebar Toggle */}
          <div className="navbar-left">
            <button
              className="navbar-toggler-custom"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#leftSidebar"
              aria-controls="leftSidebar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon-custom"></span>
            </button>
          </div>

          {/* Logo */}
          <div className="navbar-brand-custom">
            <HashLink to="/" className="navbar-logo-link">
              <img src="assets/highlights/cricklinkLogo.jpg" alt="CricLink Logo" className="navbar-logo" />
              <span className="navbar-brand-text">CricLink</span>
            </HashLink>
          </div>

          {/* Right Sidebar Toggle */}
          <div className="navbar-right">
            <button
              className="navbar-user-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#rightSidebar"
              aria-controls="rightSidebar"
              aria-label="Toggle user menu"
            >
              <i className="fa-solid fa-user"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="leftSidebar"
        aria-labelledby="leftSidebarLabel"
      >
        <div className="offcanvas-header">
          <div className="sidebar-header-content">
            <img src="assets/highlights/cricklinkLogo.jpg" alt="logo" className="sidebar-logo" />
            <h5 className="offcanvas-title" id="leftSidebarLabel">Menu</h5>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/">
                <i className="fas fa-home"></i> Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/About">
                <i className="fas fa-info-circle"></i> About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/Players">
                <i className="fas fa-users"></i> Players
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/UpcomingTournamentsCards">
                <i className="fas fa-trophy"></i> Tournaments
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/TeamsPage">
                <i className="fas fa-users-cog"></i> Teams
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link-custom" to="/ContactUs">
                <i className="fas fa-envelope"></i> Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="rightSidebar"
        aria-labelledby="rightSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="rightSidebarLabel">Profile</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {isUserLoggedIn ? (
            <>
              <div className="user-profile-section">
                <div className="user-avatar-wrapper">
                  <img
                    src="11.jpg"
                    alt="Avatar"
                    className="user-avatar"
                  />
                </div>
                <h5 className="user-name">CricLink User</h5>
                <p className="user-role">{sessionStorage.getItem("currentUser")}</p>
              </div>
              <ul className="navbar-nav user-menu">
                <li className="nav-item">
                  <a className="nav-link-custom" href="#" onClick={profile}>
                    <i className="fas fa-user"></i> My Profile
                  </a>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link-custom" to="/About">
                    <i className="fas fa-info-circle"></i> About
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link-custom" to="/ContactUs">
                    <i className="fas fa-envelope"></i> Contact Us
                  </HashLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link-custom logout-link" href="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <div className="user-profile-section">
              <div className="user-avatar-wrapper">
                <img
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                  alt="Avatar"
                  className="user-avatar"
                />
              </div>
              <button
                type="button"
                className="btn-login"
                onClick={() => navigate("/signIn")}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
