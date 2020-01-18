import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

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
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={Friends} />
          <Route exact path="/" />
        </Switch>
      </div>
      {/* <Login />
        <FriendList /> */}
    </Router>
  );
}

export default App;
