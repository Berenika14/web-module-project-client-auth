import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilis/axiosWithAuth";

const FriendsList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>--Friends List--</h1>
      <ul>
        {state.map((friend) => {
          return (
            <li>
              {friend.name} - {friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
