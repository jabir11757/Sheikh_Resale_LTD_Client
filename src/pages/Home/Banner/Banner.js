import React from "react";
import Image3 from "../../../images/image-banner7.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-12 my-4">
      <div className="flex justify-center items-center lg:mx-12 mx-2">
        <div>
          <h1 className="text-4xl font-semibold text-gray-700">
            Headline is the most <br />{" "}
            <span className="text-blue-600">Important</span> thing in the web
            world
          </h1>
          <p className="mt-6">
            Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia
            ex Product Similique quas ea veniam Tempore quasi porro Blanditiis
            aut mollitia ex
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
      <div className="flex justify-center">
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