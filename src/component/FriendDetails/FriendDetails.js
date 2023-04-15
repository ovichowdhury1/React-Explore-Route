import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>This is details page of Friend: {friend.name}</h1>
            <p>call: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;