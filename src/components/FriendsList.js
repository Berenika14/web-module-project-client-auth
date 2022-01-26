import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
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
