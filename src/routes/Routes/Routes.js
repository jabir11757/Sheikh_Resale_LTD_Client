import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blogs from "../../pages/Blogs/Blogs";
import Buyers from "../../pages/Dashboard/Buyers/Buyers";
import Home from "../../pages/Home/Home/Home";
import Categories from "../../pages/Home/Services/Categories/Categories";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";
import Signup from "../../pages/Signup/Signup";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../../pages/Dashboard/Payment/Payment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import Messages from "../../pages/Message/Messages";
import Campaign from "../../pages/Campaign/Campaign";
import Contacts from "../../pages/Contacts/Contacts";
import AllProducts from "../../pages/AllProducts/AllProducts";
import AllProduct from "../../pages/AllProducts/AllProduct";
import AllProductsDetail from "../../pages/AllProducts/AllProductsDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Categories />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-product-resale-server-jabir11757.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: () =>
          fetch(
            "https://assignment-product-resale-server-jabir11757.vercel.app/allProducts"
          ),
      },
      {
        path: "/allProducts/:id",
        element: <AllProductsDetail />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-product-resale-server-jabir11757.vercel.app/allProducts/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers />,
      },
      {
        path: "/dashboard/addProducts",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-product-resale-server-jabir11757.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
