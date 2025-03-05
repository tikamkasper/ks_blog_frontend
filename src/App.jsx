import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/auth/Login.jsx";
import UserDashLayout from "./components/pages/user/UserDashLayout.jsx";
import AdminDashLayout from "./components/pages/admin/AdminDashLayout.jsx";
import { getUser } from "./redux/thunks/authThunk.js";
import AdminDashboard from "./components/pages/admin/AdminDash.jsx";
import UserDashboard from "./components/pages/user/UserDash.jsx";
import UserProfile from "./components/pages/user/userProfile.jsx";
import AdminUsersLayout from "./components/pages/admin/AdminUsersLayout.jsx";
import AdminProfile from "./components/pages/admin/AdminProfile.jsx";
import AdminBlogsLayout from "./components/pages/admin/AdminBlogsLayout.jsx";
import UserBlogs from "./components/pages/user/UserBlogs.jsx";
import AdminUsers from "./components/pages/admin/adminUsers.jsx";
import AdminBlogs from "./components/pages/admin/adminBlogs.jsx";
import AdminUsersCreate from "./components/pages/admin/AdminUsersCreate.jsx";
import BlogDetail from "./components/pages/BlogDetail.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(getUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <ToastContainer position="top-right" rtl autoClose={500} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Nested Routing for Admin */}
        {isAuthenticated && user?.role === "admin" && (
          <Route element={<AdminDashLayout />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/profile" element={<AdminProfile />} />
            <Route element={<AdminUsersLayout />}>
              <Route path="admin/users" element={<AdminUsers />} />
              <Route path="admin/users/create" element={<AdminUsersCreate />} />
            </Route>
            <Route path="admin/blogs" element={<AdminBlogsLayout />}>
              <Route index element={<AdminBlogs />} />
            </Route>
          </Route>
        )}

        {/* Nested Routing for User */}
        {isAuthenticated && user?.role === "user" && (
          <Route element={<UserDashLayout />}>
            <Route index path="user/dashboard" element={<UserDashboard />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/blogs" element={<UserBlogs />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
