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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/friends">Friends List</NavLink>
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