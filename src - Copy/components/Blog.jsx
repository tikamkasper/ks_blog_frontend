import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CreateComment from "./CreateComment";
const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [blog, setBlog] = useState({});
  useEffect(async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/blogs/get/${id}`
    );

    setData(data);
    setBlog(data?.data?.blog);
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "80%",
        }}
      >
        <div>
          <img
            src={blog?.image?.url}
            alt="img"
            width={"100px"}
            height={"100px"}
          />
        </div>
        <div>
          <h1>Title: {blog?.title}</h1>
          <h2> Category: {blog?.category}</h2>
          <p>{blog.blogContent}</p>
        </div>
      </div>
      <div>
        <CreateComment blogId={id} />
      </div>
    </div>
  );
};

export default Blog;
