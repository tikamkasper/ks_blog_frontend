import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdDashboardCustomize } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import styles from "./UserSideNav.module.css";

const UserSideNav = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
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
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
          >
            <MdDashboardCustomize />
            {isExpanded && "Dashboard"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/profile"
            className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
          >
            <FaUser />
            {isExpanded && "My Profile"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/blogs"
            className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
          >
            <FaBlog /> {isExpanded && "My Blogs"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            // className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
          >
            <IoMdSettings /> {isExpanded && "Settings"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserSideNav;
