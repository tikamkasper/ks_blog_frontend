import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdDashboardCustomize } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import styles from "./UserSideNav.module.css";

const UserSideNav = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar Navigation */}
      <div
        className={`${styles.sidenav} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <div className="sidenavTop">
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <FiAlignLeft /> : <FiAlignRight />}
          </button>
        </div>
        <ul>
          <li>
            <NavLink to="/user/dashboard">
              <MdDashboardCustomize />
              {isExpanded && "Dashboard"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/profile">
              <FaUsers />
              {isExpanded && "My Profile"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/blogs">
              <FaBlog /> {isExpanded && "My Blogs"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/account">
              <IoMdSettings /> {isExpanded && "Settings"}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className={styles.dashboardContent}>
        <div className="">
          <h1>Welcome to User Dashboard</h1>
          <p>Manage your blogs and profile from here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserSideNav;
