import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import First from './Components/First/First';
import About from './Components/About/About';
import Meal from './Components/Meal/Meal';
import Meals from './Components/Meals/Meals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/',
        element: <First></First>
      },
      {
        path:'/meals',
        element: <Meals></Meals>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <p>contact</p>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
