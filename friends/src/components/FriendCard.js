import React, { useState } from 'react';

import FriendForm from '../forms/FriendForm';

const FriendCard = () => {
    const [ friends, setFriends ] = useState([]);


    const addFriend = (char) => {
        setFriends(char)
    }

    return (
        <section>
            <h1>FriendList Component</h1>
            {!friends && <p>Friends Loading</p>}
            {friends && friends.map(friend => <span>{friend.name}</span>)}

            <FriendForm addFriend={addFriend} />
        </section>
    )
}
export default FriendCard;