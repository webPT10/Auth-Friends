import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosAuth";

const AddFriendForm = () => {
    const [friend, setFriend ] =useState();
    
  console.log(addFriend);

    handleSubmit(values){
      event.preventDefault();
      axiosWithAuth
        .post('http://localhost:5000/api/friends', values)
        .then()
        .catch()
  }

  return (
    <form onSubmit={} >
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="number" placeholder="Age" name="age" />
      <button type="submit" disabled={}>Submit</button>
    </form>
  );
}
export default AddFriendForm;
