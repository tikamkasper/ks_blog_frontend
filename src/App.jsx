import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import CreateBlog from "./components/CreateBlog.jsx";
import Blog from "./components/blog.jsx";
import Login from "./components/Login.jsx";
import { useEffect, useState } from "react";

function App() {
  const [loginUser, setLoginUser] = useState({});
  useEffect(() => {
    const getLoginUser = (user) => {
      setLoginUser(user);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loginUser={loginUser} />} />
        <Route path="/login" element={<Login getLoginUser={getLoginUser} />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/create" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
