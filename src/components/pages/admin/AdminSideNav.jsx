import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import styles from "./AdminSideNav.module.css";

const SideNav = () => {
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
            <NavLink to="/admin/dashboard">
              <MdDashboardCustomize />
              {isExpanded && "Dashboard"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/profile">
              <FaUser />
              {isExpanded && "My Profile"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users">
              <FaUsers /> {isExpanded && "Users"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/blogs">
              <FaBlog /> {isExpanded && "Blogs"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/account">
              <IoMdSettings /> {isExpanded && "Settings"}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className={styles.dashboardContent}>
        <div className="">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Manage your blogs and profile from here.</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
