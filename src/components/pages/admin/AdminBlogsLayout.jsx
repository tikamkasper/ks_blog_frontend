import React from "react";
import { Link, Outlet } from "react-router";

const AdminBlogsLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <nav>
        <ul>
          <li>
            <Link to="admin/blogs">All Blogs</Link>
          </li>
          <li>
            <Link to="admin/blogs/create">Create Blogs</Link>
          </li>
        </ul>
      </nav>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBlogsLayout;
