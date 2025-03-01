// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Home from "./components/pages/Home.jsx";
// import Login from "./components/pages/auth/Login.jsx";
// import UserDashLayout from "./components/pages/user/UserDashLayout.jsx";
// import AdminDashLayout from "./components/pages/admin/AdminDashLayout.jsx";
// import { getUser } from "./redux/thunks/authThunks.js";
// import AdminDashboard from "./components/pages/admin/AdminDash.jsx";
// import Users from "./components/pages/admin/Users.jsx";
// import UserDashboard from "./components/pages/user/UserDash.jsx";
// import UserProfile from "./components/pages/user/userProfile.jsx";
// import Blogs from "./components/pages/user/Blogs.jsx";

// const App = () => {
//   const dispatch = useDispatch();
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(getUser());
//     }
//   }, [dispatch, isAuthenticated]);

//   return (
//     <Router>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         {/* Define Admin Routes */}
//         <Route path="/admin/*" element={<AdminDashLayout />}>
//           <Route
//             index
//             element={
//               isAuthenticated && user?.role === "admin" ? (
//                 <AdminDashboard />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route
//             path="users"
//             element={
//               isAuthenticated && user?.role === "admin" ? (
//                 <Users />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//         </Route>

//         {/* Define User Routes */}
//         <Route path="/user/*" element={<UserDashLayout />}>
//           <Route
//             index
//             element={
//               isAuthenticated && user?.role === "user" ? (
//                 <UserDashboard />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route
//             path="profile"
//             element={
//               isAuthenticated && user?.role === "user" ? (
//                 <UserProfile />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route
//             path="blogs"
//             element={
//               isAuthenticated && user?.role === "user" ? (
//                 <Blogs />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/auth/Login.jsx";
import UserDashLayout from "./components/pages/user/UserDashLayout.jsx";
import AdminDashLayout from "./components/pages/admin/AdminDashLayout.jsx";
import { getUser } from "./redux/thunks/authThunks.js";
import AdminDashboard from "./components/pages/admin/AdminDash.jsx";
import Users from "./components/pages/admin/Users.jsx";
import UserDashboard from "./components/pages/user/UserDash.jsx";
import UserProfile from "./components/pages/user/userProfile.jsx";
import Blogs from "./components/pages/user/Blogs.jsx";

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

        {/* Nested Routing for Admin */}
        {isAuthenticated && user?.role === "admin" && (
          <Route element={<AdminDashLayout />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/users" element={<Users />} />
          </Route>
        )}

        {/* Nested Routing for User */}
        {isAuthenticated && user?.role === "user" && (
          <Route element={<UserDashLayout />}>
            <Route index path="user/dashboard" element={<UserDashboard />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/blogs" element={<Blogs />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
