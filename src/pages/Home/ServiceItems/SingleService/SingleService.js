import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { name, picture, _id } = service;

  return (
    <div className="space-y-3 space-x-6 skew-y-6">
      <div>
        {/* image */}
        <div>
          <img className="h-36 w-56 rounded-xl" src={picture} alt="" />
        </div>
        <div className="flex justify-center mb-12">
          <div>
            <h1 className="text-xl font-bold text-gray-700 capitalize dark:text-white my-2">
              <span>{name}</span>
            </h1>

            <Link to="/messages">
              <button className="h-6 w-16 bg-gray-300 hover:bg-gray-500 hover:text-white rounded-md">
                Contact
              </button>
            </Link>

            <Link
              to={`products/${_id}`}
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-2">see details</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SingleService;
