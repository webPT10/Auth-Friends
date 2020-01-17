import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friends List</Link>
              </li>
            </ul>
          </nav>
          <Switch> 
            <Route path="/login" component={Login}>Login</Route>
            <Route path="/friends" component={FriendList}>Friend List</Route>
            <Route exact path="/">Home</Route>
          </Switch>
        </div>
        <Login />
        <FriendList />
      </Router>
  );
}

export default App;