import React from "react";

const CreateBlog = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Crate a new blog</h1>
      <form style={{ border: "1px,solid,gray", padding: "40px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "80%",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "start",
              width: "80%",
              margin: "auto",
            }}
          >
            <label htmlFor="email">Please Provide your Email:</label>

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email is required"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              margin: "auto",
            }}
          >
            <div>
              <label>Blog Title:</label>
              <input type="text" name="title" required />
            </div>
            <div>
              <label htmlFor="cat">SelectCategory:</label>
              <select name="category" id="cat" required>
                <option value="Software development">
                  Software development
                </option>
                <option value="Software Redesign">Software Redesign</option>
                <option value="HRMS">HRMS</option>
                <option value="BMS">BMS</option>
                <option value="CRM">CRM</option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "20px",
            width: "80%",
            margin: "auto",
          }}
        >
          <div className="image">
            <label htmlFor="img">Slect image:</label>
            <input id="img" type="file" name="image" />
          </div>
          <div className="textarea">
            <p>
              <label htmlFor="desc">Blog Description:</label>
            </p>
            <textarea
              required
              id="desc"
              name="blogContent"
              rows="4"
              cols="50"
              placeholder="Type your blog Description here...."
              // value={}
              // onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="button">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
