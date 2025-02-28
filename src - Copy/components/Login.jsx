import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = ({ getLoginUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/v1/users/login",
        { email, password },
        { withCredentials: true, credentials: "include" }
      )
      .then(({ data }) => {
        setUser(data?.data.user);
        console.log(data?.success, "\n", data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
    navigate("/");
  };
  getLoginUser(user);
  return (
    <div
      style={{
        width: "80%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "300px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          border: "2px solid gray",
          borderRadius: "20px",
        }}
      >
        <h1> Login here... </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "300px",
            height: "200px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div className="email">
            <p>
              <label htmlFor="email">Email:</label>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <p>
              <label htmlFor="pass">Password:</label>
            </p>
            <input
              type="password"
              name="email"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
