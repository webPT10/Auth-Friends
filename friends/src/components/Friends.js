import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosAuth";

import { Route, Redirect } from "react-router-dom";

import FriendCard from "./FriendCard";
import FriendForm from "../forms/FriendForm";

const Friends = props => {
  const [friendsList, setFriendsList] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        setFriendsList(response.data);
      })
      .catch(error => console.log("Error oh to error", error));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = friends => {
    axiosWithAuth()
      .post("http://locahost:5000/api/friends", friends)
      .then(response => setFriendsList(response.data))
      .catch(error => console.log("Error, oh to error", error.response));
  };

  return (
    <div>
      <h2>Friends</h2>
      <Route
        exact
        path="/friends"
        render={props => <FriendForm {...props} submitFriend={addFriend} />}
      />
      {friendsList.map(friend => {
        return <FriendCard key={friend.id} friend={friend} />;
      })}
      <Route
        path="/friends/edit/:id"
        render={props => {
          console.log(props);
          const currentFriend = friendsList.find(
            friend => friend.id === props.match.params.id
          );
          if (!currentFriend) {
            return <Redirect to="/friends" />;
          }
          return (
            <FriendForm
              {...props}
              submitFriend={addFriend}
              initialValues={currentFriend}
            />
          );
        }}
      />
    </div>
  );
};
export default Friends;
