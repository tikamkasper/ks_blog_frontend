import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CommentSection from "../CommentSection.jsx";
import styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.verifiedBlogs);
  const blog = blogs?.data?.blogs.find((b) => b._id === id);

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className={styles.blogDetailContainer}>
      <h1>{blog.title}</h1>
      <img src={blog.image.url} alt={blog.title} className={styles.blogImage} />
      <p className={styles.blogDetailContent}>{blog.blogContent}</p>

      {/* Comments Section */}
      <CommentSection blogId={id} comments={blog.comments} />
    </div>
  );
};

export default BlogDetail;
