import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosAuth";

import { Route, Redirect } from "react-router-dom";

import FriendCard from "./FriendCard";
import FriendForm from "../forms/FriendForm";
import { useState } from "react";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  const getFriends = () => {
    axiosWithAuth
      .get("http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        setFriends(response.data);
      })
      .catch(error => console.log("Error oh to error", error));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = (friends) => {
      axiosWithAuth
        .post('http://locahost:5000/api/friends', friends)
        .then(response => setFriendsList(response.data))
        .catch(error => console.log('Error, oh to error', error.response))
  }

  return (
      <div>
          <h2>Friends</h2>
          <Route />

          <Route />
      </div>
  )
};
export default Friends;
