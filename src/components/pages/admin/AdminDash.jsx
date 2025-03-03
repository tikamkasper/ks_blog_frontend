import React from "react";
import styles from "./AdminDash.module.css";
import user from "../../../assets/user.png";
const AdminDashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 style={{ marginLeft: "5px" }}>Admin Dashboard</h1>
        <div className={styles.subContainer}>
          <div className={styles.card}>
            <h2>201</h2>
            <p>Total Users</p>
          </div>
          <div className={styles.card}>
            <h2>201</h2>
            <p>Total Gusts</p>
          </div>
          <div className={styles.card}>
            <h2>300</h2>
            <p>Total Blogs</p>
          </div>
          <div className={styles.card}>
            <h2>250</h2>
            <p>Total Verified Blogs</p>
          </div>
        </div>
        <div className={styles.subContainer2}>
          <div className={styles.newUsers}>
            <table className={styles.table}>
              <caption>New Users</caption>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Registration Date</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.user_name_td}>
                    <img
                      src={user}
                      alt="user img"
                      width={"20px"}
                      height={"20px"}
                      style={{ borderRadius: "50%" }}
                    />{" "}
                    &nbsp;
                    <span>Aman Thakur</span>
                  </td>
                  <td>Wed Feb 26 2025 15:35:20</td>
                  <td>User</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.recentBlogs}>
            <table className={styles.table}>
              <caption>Resent Blogs</caption>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Created By</th>
                  <th>Creation Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>My Sql</td>
                  <td>
                    MySQL is an open-source relational database management
                    system.
                  </td>
                  <td>DBMS</td>
                  <td className={styles.user_name_td}>
                    <img
                      src={user}
                      alt="user img"
                      width={"20px"}
                      height={"20px"}
                      style={{ borderRadius: "50%" }}
                    />{" "}
                    &nbsp;
                    <span>Aman Thakur</span>
                  </td>
                  <td>Wed Feb 26 2025 15:35:20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
