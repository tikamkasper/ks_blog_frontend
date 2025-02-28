import React, { useState } from "react";
import { Link } from "react-router";
import { FaHome, FaBlog, FaBars } from "react-icons/fa";
import styles from "./UserDashboard.module.css";

const UserDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar Navigation */}
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
            <Link to="/user-dashboard">
              <FaHome /> {isExpanded && "Dashboard"}
            </Link>
          </li>
          <li>
            <Link to="/user-blogs">
              <FaBlog /> {isExpanded && "My Blogs"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className={styles.dashboardContent}>
        <h1>Welcome to User Dashboard</h1>
        <p>Manage your blogs and profile from here.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
