import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigate();

    return (
        <div>
            <Header></Header>
            <div  className={ navigation.state === "loading" && "loading"}></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;