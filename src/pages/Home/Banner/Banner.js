import React from "react";
import Image3 from "../../../images/image-banner7.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-12 my-4">
      <div className="flex justify-center items-center lg:mx-12 mx-2 hover:translate-x-6 hover:duration-1000">
        <div>
          <h1 className="text-4xl font-semibold text-gray-700">
            A big and believable online <br />{" "}
            <span className="text-blue-600">Reseller</span> Platform ever.
          </h1>
          <p className="mt-6">
            It's a online reseller platform, where user can resale bike and
            provide best hospitality to the consumers.{" "}
          </p>
          <div className="mt-4 hidden lg:block">
            <button className="h-12 w-32 text-white hover:text-gray-600 bg-gray-600 hover:bg-gray-200 rounded">
              Button
            </button>
            <button className="h-12 w-32 text-gray-600 hover:text-gray-200 bg-gray-200 hover:bg-gray-600 rounded mx-2">
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end lg:mr-12 mr-4 hover:translate-x-6 hover:duration-1000">
        <div
          style={{
            borderTopRightRadius: "200px",
            borderTopLeftRadius: "200px",
          }}
          className="flex justify-center items-center bg-gray-600 mt-4"
        >
          <img
            style={{
              borderTopRightRadius: "150px",
              borderTopLeftRadius: "150px",
            }}
            className="h-3/4 w-3/4"
            src={Image3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
