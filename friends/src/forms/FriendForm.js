import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosAuth";

const FriendForm = () => {
    const [friend, setFriend ] =useState();
    
  console.log(addFriend);

  return (
    <form onSubmit={} >
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="number" placeholder="Age" name="age" />
      <button type="submit" disabled={}>Submit</button>
    </form>
  );
}
export default FriendForm;
