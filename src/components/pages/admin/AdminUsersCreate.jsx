import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/thunks/userThunk.js";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./AdminUsersCreate.module.css";

const AdminUsersCreate = () => {
  const { users, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const res = await dispatch(
        createUser({
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
        })
      ).unwrap();
      toast.success("User created successfully.");
      setUser({ fullName: "", email: "", password: "", confirmPassword: "" });
      navigate("/admin/users");
    } catch (err) {
      toast.error(error || "Invalid Credentials.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create New User</h2>
      <form className={styles.createForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
            value={user.fullName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Create Password:</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
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
        <div className={styles.inputGroup}>
          <label>Confirm Password:</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Enter your password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className={styles.createBtn}>
          Create
        </button>
      </form>
    </div>
  );
};

export default AdminUsersCreate;
