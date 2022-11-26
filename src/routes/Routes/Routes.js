import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Sellers from "../../pages/Dashboard/Sellers/Sellers";
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard/sellers',
                element: <Sellers />
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers />
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />
            }
        ]
    }
])