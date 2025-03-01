import React from "react";
import { Outlet } from "react-router";
import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import SideNav from "./AdminSideNav.jsx";
import styles from "./AdminDashLayout.module.css";

const AdminDashLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideNav />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashLayout;
