import React from "react";
import { Link } from "react-router-dom";

const AllProduct = ({ allProducts }) => {
  console.log(allProducts._id);
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-4 transition ease-in-out delay-100 duration-1000 hover:translate-x-2">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl"
        style={{ backgroundImage: `url(${allProducts?.picture})` }}
      ></div>

      <div className="w-48 -mt-10 overflow-hidden bg-gray-200 rounded-lg shadow-lg md:w-56 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {allProducts?.name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-300 dark:bg-gray-700">
          <Link to={`/allProducts/${allProducts._id}`}>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              View Details
            </button>
          </Link>
          <Link to="/messages">
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
