import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogOut = () => {
  const { push } = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .post(
        "http://localhost:9000/api/logout",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h2>Your are Logged out </h2>
    </div>
  );
};
export default LogOut;
