import React from "react";
import { Link } from "react-router";
import styles from "./BlogCard.module.css";
import user from "../assets/user.png";

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <img
        src={blog.image.url}
        alt={blog.title}
        className={styles.blogCardImage}
      />
      <div className={styles.blogContent}>
        <h2>{blog.title}</h2>
        <p>{blog.blogContent.slice(0, 100)}...</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <img src={user} alt="user" width={"15px"} />
            &nbsp;
            <p>{blog.createrUserId.fullName}</p>
          </div>
          <div>
            <p>{blog.createdAt}</p>
          </div>
        </div>
        <Link to={`/blog/${blog._id}`} className={styles.readMore}>
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
