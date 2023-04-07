import {Navigate} from 'react-router-dom';
import {lazy,Suspense} from 'react';
import Home from '../views/Home';
import Index from '../views/Index';
import Blog from '../views/Blog';

let element = [
    {
        path:'/index',
        element:<Index/>,
        children:[
            {
                path:'home',
                element:<Home/>,
            },
            {
                path:'blog',
                element:<Blog/>,
            },
        ]
    },
    {
        path:'/',
        element:<Navigate to='/index/home'></Navigate>
    }
]

export default element;