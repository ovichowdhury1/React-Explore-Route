import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive})=> isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to='/posts' >Posts</NavLink>
                <NavLink to='/about' >About</NavLink>
              
            </nav>
            <h1>This is common component</h1>
        </div>
    );
};

export default Header;