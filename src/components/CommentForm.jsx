import React, { useState } from "react";

import styles from "./CommentForm.module.css";

const CommentForm = ({ blogId }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if email is valid or not
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmail = emailRegex.test(email);

    if (!isEmail) {
      setError("Invalid email format.");
      return;
    }
    setError("");
    console.log({ blogId, email, comment });
    // send the data to the server
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          type="email"
          placeholder="Enter your email (Required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <div className={styles.error}>{error && <p>{error}</p>}</div>
      <div className={styles.btn}>
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
