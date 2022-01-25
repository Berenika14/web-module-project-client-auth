import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <input
          style={{ height: "30px" }}
          type="text"
          name="username"
          placeholder="Username"
        />
        <br />
        <input
          style={{ marginTop: "7px", height: "30px" }}
          type="password"
          name="password"
          placeholder="Password"
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
