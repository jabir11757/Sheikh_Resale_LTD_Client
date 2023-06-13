import React from "react";
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import Jabir from "../../../images/Sheikh_Jabir.jpg";

const OurTeams = () => {
  const devData = [
    {
      name: "Abdullah Al-Mamun",
      about:
        "I am a “MERN Stack developer”, I like to develop web applications with MERN & many CSS components (Tailwind CSS, Bootstrap). I also feel comfort in team work. I have completed my BSc in CSE and have an experience of frontend development (1 Year) in a software company. I am always excited to explore new technologies.",
      githubURL: "https://github.com/jabir11757",
      linkedIn: "https://www.linkedin.com/in/abdullah757",
      facebook: "https://www.facebook.com/ItsJabir",
      website: "https://my-portfolio-e325c.web.app",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-12">
        Our Honorable Teams
      </h1>

      <section className="">
        <div className="max-w-6xl px-6 py-12 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gray-700 -z-10 md:h-80 rounded-2xl"></div>

            <div className="w-full p-6 bg-gray-700 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[30rem] md:w-72 lg:h-[32rem] lg:w-[22rem] md:rounded-2xl hover:skew-y-3 hover:duration-700"
                src={Jabir}
                alt=""
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-white">
                    Abdullah Al-Mamun
                  </p>
                  <p className="text-blue-300 ">MERN Stack Developer</p>
                </div>

                <p className="mt-4 text-white">
                  I am a MERN Stack developer, I like to develop web
                  applications with MERN & many CSS component libraries
                  (Tailwind CSS, Bootstrap). I also feel comfortable in team
                  work. I have completed my BSc in CSE and have an experience of
                  frontend development (1.5 Years) in a software company(Forbit
                  LTD). I am always excited to explore new technologies.
                </p>

                <div className="flex items-center justify-between mt-4 md:justify-start">
                  {devData.map((dev) => (
                    <div className="flex space-x-4">
                      <div className="flex items-center justify-center text-blue-100 hover:text-orange-600 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                        <a href={dev?.githubURL}>
                          <FaGithub className="" />
                        </a>
                      </div>
                      <div className="flex items-center justify-center text-blue-100 hover:text-orange-600 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                        <a href={dev?.linkedIn}>
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="flex items-center justify-center text-blue-100 hover:text-orange-600 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                        <a href={dev?.facebook}>
                          <FaFacebook />
                        </a>
                      </div>
                      <div className="flex items-center justify-center text-blue-100 hover:text-orange-600 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                        <a href={dev?.website}>
                          <FaGlobe />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default OurTeams;
