import React from "react";
import product from "../../../images/online-Sale.png";
import product2 from "../../../images/delivery.jpg";
import product3 from "../../../images/product-preview.png";
import product4 from "../../../images/add-product.png";
import product5 from "../../../images/urgent-sales.png";
import product6 from "../../../images/vendor.jpg";

const OurServices = () => {
  const serviceData = [
    {
      name: "Online Resale",
      image: product,
      details:
        "Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea veniam Tempore quasi porro Blanditiis",
    },
    {
      name: "Flexible Delivery System",
      image: product2,
      details:
        "Blanditiis aut mollitia Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea veniam Tempore quasi porro Blanditiis",
    },
    {
      name: "10 Days preview",
      image: product3,
      details:
        "Tempore quasi porro Blanditiis Blanditiis aut mollitia quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea",
    },
    {
      name: "Sellers can add products",
      image: product4,
      details:
        "Blanditiis aut mollitia Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea veniam Tempore quasi porro Blanditiis",
    },
    {
      name: "Sellers can add products as 'Urgent Sales'",
      image: product5,
      details:
        "Tempore quasi porro Blanditiis Blanditiis aut mollitia quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea",
    },
    {
      name: "Multi-Vendor Selling System",
      image: product6,
      details:
        "Tempore quasi porro Blanditiis Blanditiis aut mollitia quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Similique quas ea",
    },
  ];

  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-3xl font-bold">Our Provided Services</h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((services) => (
            <div className="flex flex-col items-center p-4">
              <div>
                <img
                  className="rounded-full h-16 w-16"
                  src={services?.image}
                  alt=""
                />
              </div>
              <h3 className="my-3 font-bold">{services.name}</h3>
              <div className="space-y-1 leading-tight">
                <p className="text-center mx-10">{services.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
