import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/thunks/authThunks";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Eye Icons
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(" comp:", { email, password });
      // const res = await dispatch(loginUser({ email, password })).unwrap();
      dispatch(loginUser({ email, password }));
      // toast.success("Login Successful.");
      // if (res.user.role === "admin") {
      //   navigate("/dashboard/admin");
      // } else if (res.user.role === "user") {
      //   navigate("/dashboard/user");
      // } else {
      //   navigate("/");
      // }
    } catch (error) {
      toast.error(error.message || "Invalid Credentials.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password:</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>
        <p>Are you authorized user ?</p>
      </div>
    </div>
  );
};

export default Login;
