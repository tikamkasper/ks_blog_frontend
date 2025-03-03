import React from "react";
import { Outlet } from "react-router";
import SideNavAdminUsers from "./SideNavAdminUsers";

const AdminUsersLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SideNavAdminUsers />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminUsersLayout;
