import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const marksArray = [
        { 'id': 1, 'name': 'Alice', 'physics': 85, 'chemistry': 70, 'math': 92 },
        { 'id': 2, 'name': 'Bob', 'physics': 78, 'chemistry': 83, 'math': 80 },
        { 'id': 3, 'name': 'Charlie', 'physics': 90, 'chemistry': 92, 'math': 87 },
        { 'id': 4, 'name': 'David', 'physics': 65, 'chemistry': 55, 'math': 60 },
        { 'id': 5, 'name': 'Emma', 'physics': 91, 'chemistry': 89, 'math': 93 },
        { 'id': 6, 'name': 'Frank', 'physics': 77, 'chemistry': 81, 'math': 75 },
        { 'id': 7, 'name': 'Grace', 'physics': 82, 'chemistry': 79, 'math': 88 },
        { 'id': 8, 'name': 'Harry', 'physics': 95, 'chemistry': 96, 'math': 98 },
        { 'id': 9, 'name': 'Isabella', 'physics': 86, 'chemistry': 90, 'math': 87 },
        { 'id': 10, 'name': 'Jack', 'physics': 73, 'chemistry': 68, 'math': 72 },
        { 'id': 11, 'name': 'Karen', 'physics': 79, 'chemistry': 85, 'math': 81 },
        { 'id': 12, 'name': 'Luke', 'physics': 88, 'chemistry': 87, 'math': 89 },
    ]
    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray}
            >

               <Line dataKey="physics"></Line>
               <Line dataKey="math"></Line>
               <XAxis dataKey="name"></XAxis>
               <YAxis></YAxis>
               <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default DashBoard;