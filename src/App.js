import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
