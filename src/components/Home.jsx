import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
const Home = ({ loginUser }) => {
  const [blogs, setBlogs] = useState([]);
  console.log("loginUser:", loginUser);

  const navigate = useNavigate();

  // useEffect(async () => {
  //   const { data } = await axios.get("http://localhost:8000/api/v1/users/me");
  //   setUser(data?.data?.user);
  // }, []);

  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/blogs/get"
      );
      setBlogs(data?.data?.blogs);
    };
    fatchData();
  }, []);

  const handleLogout = async () => {
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/users/logout",
      {},
      { withCredentials: true, credentials: "include" }
    );
    console.log(data);
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            width: "80%",
            margin: "auto",
          }}
        >
          <h1>All Blogs</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/blog/create">Create New Blog</Link>

            <Link to="#" onClick={handleLogout}>
              Logout
            </Link>
            <Link to="/login">login</Link>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogs &&
            blogs.map((blog, index) => (
              <div
                key={blog._id}
                style={{
                  display: "flex",
                  gap: "50px",
                  width: "80%",
                  padding: "20px",
                  border: "2px solid gray",
                  borderRadius: "10px",
                  margin: "auto",
                  gap: "20px",
                }}
              >
                <div>
                  <img
                    src={blog.image.url}
                    alt="img"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div>
                  <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.blogContent}</p>
                  </div>
                  <div style={{ marginTop: "40px" }}>
                    <Link to={`/blog/${blog._id}`}>Reade More</Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
