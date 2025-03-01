import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/thunks/authThunks.js";
import Logo from "../../assets/kasper_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUser()).unwrap();
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.ks_logo}>
          <img src={Logo} alt="kasper_logo" width="150px" height="50px" />
        </div>
        <div className={styles.login_logout}>
          {!isAuthenticated ? (
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
