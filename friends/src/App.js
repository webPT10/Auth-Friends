import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';


function App() {
  return (
    <div >
      <Login />
      <FriendList />
    </div>
  );
}

export default App;
