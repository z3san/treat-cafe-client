import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs";
import Blogs from "../pages/Blogs/Blogs";
import AboutUs from "../pages/About Us/AboutUs";
import Contact from "../pages/Contact/Contact";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Details from "../Layout/Details";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";


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
            {
                path: '/login' ,
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'chefdetails',
        element: <Details></Details>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)

            }
        ]

    }
    
])

export default router;