import React from 'react';
import './Sidebar.css';
import { FaBell, FaHome, FaSearch, FaCalendarAlt, FaFileAlt,  FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Remind<span className="accent">ax</span></h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><Link to="/" className="nav-link"><FaHome /><span>Home</span></Link></li>
          <li><Link to="/dashboard" className="nav-link"><FaSearch /><span>Dashboard</span></Link></li>
          <li><Link to="/reminders" className="nav-link"><FaBell /><span>Reminders</span></Link></li>
          <li><Link to="/account" className="nav-link"><MdAccountCircle /><span>Account</span></Link></li>
          <li><Link to="/calendar" className="nav-link"><FaCalendarAlt /><span>Calendar</span></Link></li>
          <li><Link to="/reports" className="nav-link"><FaFileAlt /><span>Reports</span></Link></li>
        </ul>
      </nav>
      <div className="sidebar-quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><FaEnvelope /></li>
          <li><FaQuestionCircle /></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
