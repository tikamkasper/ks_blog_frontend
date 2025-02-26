import axios from "axios";
import React, { useState } from "react";

const CreateComment = ({ blogId }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "",
        { blogId, commentContent: comment },
        { withCredentials: true, credentials: "include" }
      )
      .then(({ data }) => {
        console.log(data?.success, "\n", data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="comment">Create a comment:</label>
      </p>
      <textarea
        id="comment"
        name="commentContent"
        rows="4"
        cols="50"
        placeholder="Type your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateComment;
