import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs";


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
            }
        ]
    }
])

export default router;