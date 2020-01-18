import React, { useState } from 'react';
import { axiosWithAuth } from '../utilities/axiosAuth';

import AddFriendForm from '../forms/FriendForm';

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

            <AddFriendForm addFriend={addFriend} />
        </section>
    )
}
export default FriendCard;