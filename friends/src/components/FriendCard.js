import React from "react";
// import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  return (
    <div>
      {friend.name} {friend.email} {friend.age}
    </div>
  );
};
export default FriendCard;
