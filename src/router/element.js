import {Navigate} from 'react-router-dom';
import {lazy,Suspense} from 'react';
import Index from '../views/Index';
import Loading from "../component/Loading";
const Home = lazy(()=>import('../views/Home'));
const Blog = lazy(()=>import('../views/Blog'));
const Cate = lazy(()=>import('../views/Cate'));
const About = lazy(()=>import('../views/About'));
const Feedback = lazy(()=>import('../views/Feedback'));
const Login = lazy(()=>import('../views/Login'));
const Admin = lazy(()=>import('../views/Admin'));
const AdminAddBlog = lazy(()=>import('../views/AdminAddBlog'));
const AdminBlogList = lazy(()=>import('../views/AdminBlogList'));
const AdminCateList = lazy(()=>import('../views/AdminCateList'));
const AdminChangeBlog = lazy(()=>import('../views/AdminChangeBlog'));
const AdminEcharts = lazy(()=>import('../views/AdminEcharts'));
const AdminHome = lazy(()=>import('../views/AdminHome'));
const NotFound = lazy(()=>import('../component/NotFound'));

let element = [
    {
        path:'/index',
        element:<Index/>,
        author: false,
        children:[
            {
                path:'home',
                element:<Suspense fallback={<Loading/>}><Home /></Suspense>,
                author: false
            },
            {
                path:'blog',
                element:<Suspense fallback={<Loading/>}><Blog /></Suspense>,
                author: false
            },
            {
                path:'cate',
                element:<Suspense fallback={<Loading/>}><Cate /></Suspense>,
                author: false
            },
            {
                path:'about',
                element:<Suspense fallback={<Loading/>}><About /></Suspense>,
                author: false
            },
            {
                path:'feedback',
                element:<Suspense fallback={<Loading/>}><Feedback /></Suspense>,
                author: false
            },
        ]
    },
    {
        path:'/login',
        element:<Suspense fallback={<Loading/>}><Login /></Suspense>,
        author: false
    },
    {
        path:'/admin',
        element:<Suspense fallback={<Loading/>}><Admin /></Suspense>,
        author: true,
        children:[
            {
                path:'adminhome',
                element:<Suspense fallback={<Loading/>}><AdminHome /></Suspense>,
                author: true,
            },
            {
                path:'adminbloglist',
                element:<Suspense fallback={<Loading/>}><AdminBlogList /></Suspense>,
                author: true,
            },
            {
                path:'adminaddblog',
                element:<Suspense fallback={<Loading/>}><AdminAddBlog /></Suspense>,
                author: true,
            },
            {
                path:'adminchangeblog',
                element:<Suspense fallback={<Loading/>}><AdminChangeBlog /></Suspense>,
                author: true,
            },
            {
                path:'admincatelist',
                element:<Suspense fallback={<Loading/>}><AdminCateList /></Suspense>,
                author: true,
            },
            {
                path:'adminecharts',
                element:<Suspense fallback={<Loading/>}><AdminEcharts /></Suspense>,
                author: true,
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to='/index/home'></Navigate>,
        author: false
    },
    {
        path: '*',
        element: <Suspense fallback={<Loading/>}><NotFound /></Suspense>,
        author: false
    },
]

export default element;