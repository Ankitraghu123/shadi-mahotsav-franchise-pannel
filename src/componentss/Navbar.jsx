import React, { useState } from "react";
// import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar fixed-top">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <h1 className="navbar-logo">
            Shadi - <span className="logo">Mahotsav</span>
          </h1>
        </div>

        {/* Center: Welcome Message */}
        <div className="navbar-center">
          <p>Welcome, Username!</p>
        </div>

        <div className="right">
          {/* Right: Navigation Links and Profile */}
          <div className={`navbar-right ${isMenuOpen ? "menu-open" : ""}`}>
            <nav className="navbar-links">
              <a href="/home">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/courses">Courses</a>
            </nav>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span>☰</span>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-icon"
            />
            <div className="dropdown-menu">
              <a href="/profile">My Profile</a>
              <a href="/edit-profile">Edit Profile</a>
              <a href="/my-courses">My Courses</a>
              <a href="/certificate">Certificate</a>
              <a href="/affiliate-panel">Affiliate Panel</a>
              <a href="/upgrade-plan">Upgrade Plan</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
