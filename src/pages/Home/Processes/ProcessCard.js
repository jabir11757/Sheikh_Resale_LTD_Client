import React from "react";

const ProcessCard = ({ process }) => {
  const { id, title, description } = process;
  return (
    <div className="card shadow-2xl my-4 transition ease-in-out delay-100 hover:translate-y-2">
      <div className="card-body bg-gray-200 rounded-2xl">
        <h1 className="text-3xl text-center font-semibold h-10 w-10 mx-auto mb-4 border border-gray-500 rounded-full">
          {id}
        </h1>
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className="text-center mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
