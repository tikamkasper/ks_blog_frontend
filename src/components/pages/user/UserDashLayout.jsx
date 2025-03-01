import React from "react";
import { Outlet } from "react-router";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import UserSideNav from "./UserSideNav";
import styles from "./UserDashLayout.module.css";

const UserDashLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <UserSideNav />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserDashLayout;
