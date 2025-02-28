import React from "react";
import styles from "./CommentSection.module.css";
import CommentForm from "./CommentForm";

const CommentSection = ({ blogId, comments }) => {
  return (
    <div className={styles.commentSectionContainer}>
      <h2>Comments</h2>
      <div className={styles.commentSectionList}>
        {comments.map((comment) => (
          <div key={comment._id} className={styles.commentSectionItem}>
            <strong>{comment.email}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <CommentForm blogId={blogId} />
    </div>
  );
};

export default CommentSection;
