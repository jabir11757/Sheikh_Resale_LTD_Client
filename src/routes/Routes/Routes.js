import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";
import Signup from "../../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])