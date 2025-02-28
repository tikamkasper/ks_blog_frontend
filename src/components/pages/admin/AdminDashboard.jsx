import React, { useState } from "react";
import { Link } from "react-router";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="dashboard-container">
      <div
        className={`${styles.sidenav} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <button
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "<" : ">"}
        </button>
        <ul>
          <li>
            <Link to="/admin-dashboard">
              <FaHome /> {isExpanded && "Dashboard"}
            </Link>
          </li>
          <li>
            <Link to="/admin-users">
              <FaUser /> {isExpanded && "Users"}
            </Link>
          </li>
          <li>
            <Link to="/admin-settings">
              <FaCog /> {isExpanded && "Settings"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
      </div>
    </div>
  );
};
export default AdminDashboard;
