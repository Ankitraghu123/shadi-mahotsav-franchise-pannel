import React, { useState } from "react";
// Ensure Font Awesome CSS is included in your project.
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Sidebar.css"; // Add custom CSS for the sidebar

const Sidebar = ({ setActivePage }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Handle opening and closing sidebar when the menu button is clicked
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  // Handle closing sidebar when a link is clicked
  const handleLinkClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false); // Close sidebar after clicking a link
  };

  return (
    <>
      <div className="menu-button">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <a href="#" onClick={() => handleLinkClick("Dashboard")}>
            <i className="fas fa-user"></i> Dashboard
          </a>
          <a href="#" onClick={() => handleLinkClick("Earning")}>
            <i className="fas fa-edit"></i> My Earning
          </a>
          <a href="#" onClick={() => handleLinkClick("Achievement")}>
            <i className="fas fa-book"></i> My Achievement
          </a>
          <a href="#" onClick={() => handleLinkClick("Leaderboard")}>
            <i className="fas fa-certificate"></i> Leaderboard
          </a>
          <a href="#" onClick={() => handleLinkClick("Payout")}>
            <i className="fas fa-users"></i> Payout Details
          </a>
          <a href="#" onClick={() => handleLinkClick("Leads")}>
            <i className="fas fa-arrow-up"></i> Leads Details
          </a>
          <a href="#" onClick={() => handleLinkClick("Kyc")}>
            <i className="fas fa-id-card"></i> Kyc Details
          </a>
          <a href="#" onClick={() => handleLinkClick("Nominee")}>
            <i className="fas fa-user-friends"></i> Nominee Details
          </a>
          <a href="#" onClick={() => handleLinkClick("Link")}>
            <i className="fas fa-link"></i> Link Generator
          </a>
          <a href="#" onClick={() => handleLinkClick("Referral")}>
            <i className="fas fa-user-plus"></i> Referral Details
          </a>
          <a href="#" onClick={() => handleLinkClick("Logout")}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </nav>
      </aside>
      <div
        className={`backdrop ${isSidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
