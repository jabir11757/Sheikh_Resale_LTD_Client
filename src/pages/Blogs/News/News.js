import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../images/bikes/bmw.jpg";
import image2 from "../../../images/bikes/cbr.jpg";
import image3 from "../../../images/bikes/suzuki.jpg";
import image4 from "../../../images/bikes/ktm.jpg";

const News = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-serif font-bold">
            Top selling bikes of this month
          </h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Most sales in North American Country in 12 june 2022 to 12 june 2023
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-900">
            <Link to="/" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={image1}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                to="/"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                to="/"
                className="text-xs tracking-wider hover:underline dark:text-violet-400"
              >
                View details
              </Link>
              <Link className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <Link to="/" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={image4}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                to="/"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                to="/"
                className="text-xs tracking-wider hover:underline dark:text-violet-400"
              >
                View details
              </Link>
              <Link className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <Link to="/" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={image2}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                to="/"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                to="/"
                className="text-xs tracking-wider hover:underline dark:text-violet-400"
              >
                View details
              </Link>
              <Link className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <Link to="/" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={image3}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                to="/"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                to="/"
                className="text-xs tracking-wider hover:underline dark:text-violet-400"
              >
                View details
              </Link>
              <Link
                to="/"
                className="flex-1 py-2 text-lg font-semibold leading-snug"
              >
                Te nulla oportere reprimique his dolorum
              </Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
