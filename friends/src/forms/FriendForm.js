import React, { useState } from "react";

const FriendForm = () => {
    const [friend, setFriend ] =useState();

  return (
    <form>
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="number" placeholder="Age" name="age" />
      <button type="submit" >Submit</button>
    </form>
  );
}
export default FriendForm;
