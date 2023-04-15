import React from 'react';
import './Friends.css';
import { Link } from 'react-router-dom';
const Friends = ({friend}) => {
    const {id,name,email,username} = friend;
    return (
        <div className='friends'>
            <h1>name: {name}</h1>
            <p>email:{email}</p>
            <p><small>username: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            
        </div>
    );
};

export default Friends;