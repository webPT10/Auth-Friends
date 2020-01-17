import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosAuth';

import AddFriendForm from '../forms/AddFriendForm';

const FriendList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth
            .get('http://localhost:5000/api/friends')
            .then(response => {
                console.log(response)
                setFriends(response.data)
            })
            .catch(error => console.log('Error oh to error', error))
    },[])

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
export default FriendList;