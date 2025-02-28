import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/Header.jsx";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/layout/Footer.jsx";
import Login from "./components/pages/auth/Login.jsx";
import AdminDashboard from "./components/pages/admin/AdminDashboard.jsx";
import UserDashboard from "./components/pages/user/UserDashboard.jsx";
import { getUser } from "./redux/thunks/authThunks.js";

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
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {isAuthenticated && user?.role === "admin" && (
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          )}
          {isAuthenticated && user?.role === "user" && (
            <Route path="/dashboard/user" element={<UserDashboard />} />
          )}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
