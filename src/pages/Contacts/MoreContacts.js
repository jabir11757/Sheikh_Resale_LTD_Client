import React from "react";
import {
  HiOutlineClock,
  HiOutlineInformationCircle,
  HiOutlineLifebuoy,
} from "react-icons/hi2";

const MoreContacts = () => {
  const moreContactsData = [
    {
      image: <HiOutlineClock />,
      title: "OPENING HOURS",
      details:
        " Iste natus error sit sed ut perspiciatis unde omnis voluptatem laudantium, totam rem aperiam omnis voluptatem.",
    },
    {
      image: <HiOutlineLifebuoy />,
      title: "OUR SUPPORT CENTER",
      details:
        " Voluptatem laudantium, totam rem error sit sed ut perspiciatis unde omnis voluptatem laudantium, totam rem aperiam.",
    },
    {
      image: <HiOutlineInformationCircle />,
      title: "SOME INFORMATION",
      details:
        " Totam rem aperiam Iste natus error sit sed ut perspiciatis unde omnis voluptatem laudantium, totam rem aperiam.",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      {moreContactsData.map((moreContacts) => (
        <div className="flex mx-10 my-10">
          <div className="flex justify-center items-center text-5xl p-2 h-16 w-16 border border-gray-300 hover:bg-gray-300 hover:text-white rounded-full">
            {moreContacts.image}
          </div>
          <div className="mx-6">
            <h1 className="text-xl font-bold">{moreContacts.title}</h1>
            <p className="text-gray-400">{moreContacts.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreContacts;
