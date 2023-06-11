import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-product-resale-server-jabir11757.vercel.app/products"
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-16">
      <h2 className="text-3xl text-success font-bold text-center">
        Products Categories
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
