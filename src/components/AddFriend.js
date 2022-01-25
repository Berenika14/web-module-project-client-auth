import React from "react";

const AddFriend = () => {
  return (
    <div>
      <h2>AddFriend</h2>
      <form>
        <label>Friend Name: </label>
        <input style={{ height: "20px" }} type="text" name="name" />
        <br />
        <label>Friend Email: </label>
        <input
          style={{ marginTop: "7px", height: "20px" }}
          type="email"
          name="email"
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
