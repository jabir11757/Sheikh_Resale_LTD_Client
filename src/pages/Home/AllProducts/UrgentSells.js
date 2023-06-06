import React from "react";
import Yamaha from "../../../images/yamaha-155.jpg";
import img1 from "../../../images/bikes/bmw.jpg";
import img2 from "../../../images/bikes/cbr.jpg";
import img3 from "../../../images/bikes/ducati.jpg";
import img4 from "../../../images/bikes/hero.jpg";
import img5 from "../../../images/bikes/honda.jpg";
import img6 from "../../../images/bikes/ktm.jpg";
import img7 from "../../../images/bikes/bmw.jpg";
import img8 from "../../../images/bikes/suzuki.jpg";

const UrgentSells = () => {
  const cardItem = [
    {
      image: img8,
      name: "Suzuki",
    },
    {
      image: img1,
      name: "Yamaha",
    },
    {
      image: img2,
      name: "BMW",
    },
    {
      image: img3,
      name: "KTM",
    },
    {
      image: img4,
      name: "TVS",
    },
    {
      image: img5,
      name: "Honda",
    },
    {
      image: img6,
      name: "CBR",
    },
    {
      image: img7,
      name: "Hero",
    },
    {
      image: img5,
      name: "Lifan",
    },
    {
      image: img6,
      name: "Royal Infield",
    },
    {
      image: img7,
      name: "Vespa",
    },
    {
      image: img8,
      name: "Ducati",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Urgent Sales</h1>
      <section className="py-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-500 mx-auto ">
          {cardItem.map(
            (card) => (
              <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-4">
                <div
                  className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    {card.name}
                  </h3>

                  <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      $2000
                    </span>
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            )

            // <div className="flex justify-center">
            //     <img alt="" className="rounded shadow-sm h-3/4 w-3/4 aspect-square" src={img?.image} />
            // </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UrgentSells;
