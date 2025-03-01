import React from "react";
import { Outlet } from "react-router";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import UserSideNav from "./UserSideNav";

const UserDashboard = () => {
  return (
    <div className="gust">
      <Header />
      <UserSideNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserDashboard;
