import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Friend = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>This real friend: {friend.length}</h1>
            {
                friend.map( friend => <Friends
                key={friend.id}
                friend={friend}></Friends>)
            }
        </div>
    );
};

export default Friend;