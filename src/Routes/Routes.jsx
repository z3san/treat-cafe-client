import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs";
import Blogs from "../pages/Blogs/Blogs";
import AboutUs from "../pages/About Us/AboutUs";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                

            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>,
                loader: ()=> fetch('http://localhost:5000/chefs')
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    },
    
])

export default router;