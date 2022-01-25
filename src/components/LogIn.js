import React, { useState } from "react";

const Login = () => {
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

  console.log(state);
  return (
    <div>
      <h1>Log In</h1>
      <form>
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
