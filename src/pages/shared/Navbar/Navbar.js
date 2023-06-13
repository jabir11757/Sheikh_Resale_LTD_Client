import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/ProviderContext/ProviderContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItem = (
    <React.Fragment>
      <li>
        <Link
          className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
          to="/allProducts"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
          to="/blogs"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
          to="/campaign"
        >
          Campaign
        </Link>
      </li>
      <li>
        <Link
          className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
          to="/contacts"
        >
          Contact
        </Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link
              className="text-xl active:bg-gray-300 mx-2 active:text-white rounded-xl"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            {" "}
            <button
              className="text-white bg-gray-600 rounded-xl"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link
            className="text-xl font-semibold rounded-xl hover:bg-green-600 hover:text-white ml-2"
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            htmlFor="dashboard-drawer"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-semibold border border-gray-200 hover:bg-gray-50 rounded-full"
        >
          Sheikh Resale Ltd
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <label
        tabIndex={2}
        htmlFor="dashboard-drawer"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
