import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router"; // ✅ Updated import
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/authSlice";
import Breadcrumb from "../../../assets/beadcrumb.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.Breadcrumb}>
        <img
          src={Breadcrumb}
          alt="show_hide_dashboard"
          width="50px"
          height="30px"
        />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.login_logout}>
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="#" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
