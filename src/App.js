import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogIn from "./components/LogIn";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import LogOut from "./components/LogOut";

function App() {
  return (
    <Router>
      <div className="App">
        <h2> Welcome to Friends Database</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/login">Log In</Link>
          <Link to="/friends">FriendsList</Link>
          <Link to="/friends/add">Add Friend</Link>
          <Link to="/logout">Log out</Link>
        </div>
        <Route exact path="/">
          <LogIn />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
      </div>
    </Router>
  );
}

export default App;
