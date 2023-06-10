import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../../../images/bikes/ducati.jpg";
import accident_1 from "../../../images/accident_1.png";
import accident_2 from "../../../images/accident_2.jpeg";
import accident_3 from "../../../images/accident_4.jpg";
import accident_4 from "../../../images/accident_5.jpg";
import emergency from "../../../images/emergency-stop.jpeg";
import news_bike from "../../../images/news_bike.jpg";

const Others = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          to="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src={coverImage}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-xl font-semibold sm:text-2xl group-hover:underline group-focus:underline">
              This bike are highly expected within next month
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2023
            </span>
            <p>
              Making by a famous branding company Suzuki is spreading out about
              this version. Expected brand new edition's release date next 24
              july 2023. Making by a famous branding company Suzuki is spreading
              out about this version. Expected brand new edition's release date
              next 24 july 2023. Making by a famous branding company Suzuki is
              spreading out about this version. Expected brand new edition's
              release date next 24 july 2023.
            </p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={accident_1}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={accident_2}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 22, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={accident_3}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={accident_4}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 24, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={emergency}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 25, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={news_bike}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 26, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-blue-500 border border-blue-500 hover:border-gray-300 hover:bg-gray-500 hover:text-white rounded-xl bg-"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Others;
