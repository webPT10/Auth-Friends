import React, { useState } from "react";

const FriendForm = ({ submitFriend, initialValues }) => {
  const [friend, setFriend] = useState(
    initialValues || { name: "", email: "", age: "" }
  );

  const handelChange = event =>
    setFriend({ ...friend, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    submitFriend(friend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={friend.name}
        onChange={handelChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={friend.email}
        onChange={handelChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={friend.age}
        onChange={handelChange}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};
export default FriendForm;
