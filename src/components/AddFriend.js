import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const AddFriend = () => {
  const { push } = useHistory();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>AddFriend</h2>
      <form onSubmit={handleSubmit}>
        <label>Friend Name: </label>
        <input
          style={{ height: "20px" }}
          onChange={handleChange}
          type="text"
          name="name"
        />
        <br />
        <label>Friend Email: </label>
        <input
          style={{ marginTop: "7px", height: "20px" }}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <button
          style={{
            marginLeft: "40px",
            marginTop: "7px",
            height: "30px",
            width: "7%",
            backgroundColor: "lightblue",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFriend;
