import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../shared/Loading/Loading";
import AllProduct from "./AllProduct";
import bgImage from "../../images/full-bg.png";

const AllProducts = () => {
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-product-resale-server-jabir11757.vercel.app/allProducts"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <div>
        <p className="text-3xl font-bold text-center w-1/6 mx-auto py-2 mt-8 mb-16 border-2 border-gray-300 hover:bg-gray-400 hover:text-white rounded-full transition ease-in-out delay-100 hover:translate-x-1">
          All Products
        </p>
      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {allProducts.map((allProducts) => (
          <AllProduct key={allProducts._id} allProducts={allProducts} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
