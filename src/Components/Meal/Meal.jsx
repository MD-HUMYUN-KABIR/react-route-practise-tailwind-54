import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = () => {
    const navigate =useNavigate();
    const goBack =() =>{
        navigate(-1);
    }
    return (
        <div>
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default Meal;