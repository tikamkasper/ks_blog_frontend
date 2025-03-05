import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import styles from "./BlogDetail.module.css";
import CommentForm from "../CommentForm.jsx";

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs.data.verifiedBlogs);
  const blog = blogs?.find((b) => b._id === id);
  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img src={blog.image.url} alt={blog.title} className={styles.image} />
        <h1>{blog.title}</h1>
        <p>{blog.blogContent}</p>
      </div>
      <div className={styles.commentsListContainer}>
        <h2>Comments</h2>
        <div className={styles.commentList}>
          {blog.comments.map((comment) => (
            <div key={comment._id} className={styles.listItem}>
              <strong>{comment.createrUserId}</strong>
              <span>{comment.updatedAt}</span>
              <p>{comment.commentContent}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.commentFormContainer}>
        <CommentForm blogId={id} />
      </div>
    </div>
  );
};

export default BlogDetail;
