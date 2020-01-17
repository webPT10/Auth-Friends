import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  // Redirect
} from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from './components/PrivateRoute';

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
            <PrivateRoute path="/friends" component={FriendList} />
            <Route exact path="/">Home</Route>
          </Switch>
        </div>
        {/* <Login />
        <FriendList /> */}
      </Router>
  );
}

export default App;