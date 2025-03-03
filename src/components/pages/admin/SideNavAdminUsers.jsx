import React from "react";
import { NavLink } from "react-router";
import styles from "./SideNavAdminUsers.module.css";
import { getAllUsers } from "../../../redux/thunks/userThunks";
import { useDispatch } from "react-redux";

const SideNavAdminUsers = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getAllUsers());
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="admin/users"
            className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
            onClick={handleClick}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="admin/users/create"
            className={({ isActive }) => (isActive ? `${styles.link_bg}` : "")}
          >
            Create User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavAdminUsers;
