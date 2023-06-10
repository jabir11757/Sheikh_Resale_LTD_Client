import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiPhone,
} from "react-icons/hi2";
import "./Contacts.css";
import MoreContacts from "./MoreContacts";
import Suggestions from "./Suggestion";

const Contacts = () => {
  const contactsData = [
    {
      image: <HiOutlineMapPin />,
      title: "ADDRESS",
      details: " House-13, Road-2, Block-F, Mirpur-1",
    },
    {
      image: <HiPhone />,
      title: "PHONE",
      details: "01710400547/01580364585",
    },
    {
      image: <HiOutlineEnvelope />,
      title: "EMAIL",
      details: "sheikhjabir547@gmail.com",
    },
    {
      image: <HiOutlineGlobeAlt />,
      title: "WEBSITE",
      details: "https://my-portfolio-e325c.web.app",
    },
  ];

  return (
    <div>
      <div className="mt-10">
        <p className="text-center text-gray-400">We'd Love to Hear From You</p>
        <h1 className="text-xl lg:text-4xl text-gray-700 font-bold text-center my-4">
          LET'S GET IN TOUCH!
        </h1>
        <p className="h-1 w-1/6 mx-auto bg-gray-200 my-6" />
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20">
        {contactsData.map((contacts) => (
          <div className="contact flex justify-center items-center bg-gray-100 hover:bg-gray-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-210 duration-300">
            <div className="my-16">
              <div className="icon flex text-3xl justify-center">
                {contacts.image}
              </div>
              <h1 className="text-xl text-center text-gray-700 font-bold my-6">
                {contacts.title}
              </h1>
              <p className="text-center text-gray-400">{contacts.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <MoreContacts />
        <Suggestions />
      </div>
    </div>
  );
};

export default Contacts;
