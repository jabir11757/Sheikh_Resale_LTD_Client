import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blogs from "../../pages/Blogs/Blogs";
import Buyers from "../../pages/Dashboard/Buyers/Buyers";
import Sellers from "../../pages/Dashboard/Sellers/Sellers";
import Home from "../../pages/Home/Home/Home";
import Categories from "../../pages/Home/Services/Categories/Categories";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";
import Signup from "../../pages/Signup/Signup";
import ManageProducts from "../../pages/Dashboard/ManageProducts/ManageProducts";

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
                path: '/products/:id',
                element: <Categories />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
                path: '/dashboard/addProducts',
                element: <AddProduct />
            },
            {
                path: '/dashboard/myProducts',
                element: <ManageProducts />
            }
        ]
    },

])