import React from "react";
import { Outlet } from "react-router";
import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import SideNav from "./AdminSideNav.jsx";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard_Container">
      <Header />
      <SideNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
