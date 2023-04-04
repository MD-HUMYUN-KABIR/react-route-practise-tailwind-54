import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/meals">Meals</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
           
        </div>
    );
};

export default Header;