import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashBoard from '../dashBoard/dashBoard';
import BarChartAxios from '../BarChartAxios/BarChartAxios';

const Meal = () => {
    const navigate =useNavigate();
    const goBack =() =>{
        navigate(-1);
    }
    return (
        <div>
            <button onClick={goBack}>go back</button>
            <DashBoard></DashBoard>
            <BarChartAxios></BarChartAxios>
        </div>
    );
};

export default Meal;