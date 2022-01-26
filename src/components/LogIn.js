import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", state)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ height: "30px" }}
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <input
          style={{ marginTop: "7px", height: "30px" }}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button
          style={{
            marginTop: "9px",
            backgroundColor: "lightblue",
            height: "30px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
