import React from "react";
import {
  FaFacebookMessenger,
  FaInfoCircle,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Riya from "../../images/riya.jpg";
import Avatar from "../../images/Sheikh_Jabir.jpg";
import Avatar2 from "../../images/jabir2.jpg";
import Avatar3 from "../../images/jabir3.jpg";
import Avatar4 from "../../images/jabir4.jpg";

const Messages = () => {
  const messageData = [
    {
      name: "SM Jabir Abdullah",
      image: Avatar,
      message: "Similique quas ea veniam Tempore ",
    },
    {
      name: "Rubina Riya",
      image: Riya,
      message: "Ki koren ?",
    },
    {
      name: "Sheikh Jabir Bin Osman",
      image: Avatar2,
      message: "Blanditiis aut mollitia Similique",
    },
    {
      name: "Jabir Al Saba",
      image: Avatar3,
      message: "Tempore quasi porro Blanditiis Blanditiis",
    },
    {
      name: "Anil Al Saba",
      image: Avatar4,
      message: "Blanditiis aut mollitia Similique quas",
    },
    {
      name: "Mahmudul Hasan Anil",
      image: Avatar2,
      message: "Tempore quasi porro Blanditiis Blanditii",
    },
    {
      name: "Sheikh Mohammad Saba Al Jabir",
      image: Avatar3,
      message: "Tempore quasi porro Blanditiis Blanditiis aut",
    },
  ];
  return (
    <div className="flex">
      <div className="w-1/3 px-6">
        {/* left side navbar */}
        <nav aria-label="Site Nav" className="flex items-center py-2 mb-2">
          <div className="flex space-x-4">
            <h1 className="text-3xl font-bold">Chats</h1>
            <FaFacebookMessenger className="h-6 w-6 mt-2 text-gray-700" />
          </div>
        </nav>

        {/* message lists */}
        {messageData.map((data) => (
          <div className="border-y-2">
            <div className="flex py-2">
              <img className="h-16 w-16 rounded-full" src={data.image} alt="" />
              <div className="mx-4 mt-2">
                <div className="text-xl">{data.name}</div>
                <div>{data.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 border-x-4 px-6">
        <div>
          {/* right side nav */}
          <nav
            aria-label="Site Nav"
            class="flex items-center justify-between border-y-2 py-1"
          >
            <div>
              <div className="flex py-2">
                <img className="h-14 w-14 rounded-full" src={Avatar} alt="" />
                <div className="mx-4 mt-1">
                  <div className="text-xl">Sheikh Jabir Bin Osman</div>
                  <div>Active 30m ago</div>
                </div>
              </div>
            </div>
            <ul class="flex items-center space-x-8 text-sm font-medium text-gray-500">
              <li class="hidden lg:block">
                <Link class="rounded-lg px-3 py-2" href="/">
                  <FaPhoneAlt className="h-7 w-7 text-gray-700" />
                </Link>
              </li>

              <li>
                <Link class="rounded-lg px-3 py-2" href="">
                  <FaVideo className="h-7 w-7 text-gray-700" />
                </Link>
              </li>

              <li>
                <Link class="rounded-lg px-3 py-2" href="">
                  <FaInfoCircle className="h-7 w-7 text-gray-700" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* messages */}
        <div>Down</div>
      </div>
    </div>
  );
};

export default Messages;
