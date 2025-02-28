import React, { useState } from "react";
import styles from "./CommentSection.module.css";

const CommentForm = ({ blogId }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Invalid email format");
      return;
    }
    setError("");
    console.log({ blogId, email, comment }); // Send this to API
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentFormContainer}>
      <input
        className={styles.commentFormInput}
        type="email"
        placeholder="Enter your email (Required)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
