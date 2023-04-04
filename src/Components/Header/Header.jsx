import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleBar = () =>{
        setOpen(!open);
    }

    return (
        <nav className='bg-purple-400 p-2' >

            <div onClick={handleBar} className='md:hidden'>
            <span> {open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}  </span>
            </div>

            <ul className={` md:flex absolute md:static bg-purple-700 pl-8 pb-4 pr-8 duration-500 ${open ? 'top-9':'-top-32'}`}>
                <li>  <ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/meals">Meals</ActiveLink></li>
                <li>  <ActiveLink to="/about">About</ActiveLink></li>
                <li> <ActiveLink to="/contact">Contact</ActiveLink></li>
            </ul>
           
        </nav>
    );
};

export default Header;