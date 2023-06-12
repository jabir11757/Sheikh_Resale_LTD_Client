import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../shared/Loading/Loading";
import AllProduct from "./AllProduct";

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
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {allProducts.map((allProducts) => (
        <AllProduct key={allProducts._id} allProducts={allProducts} />
      ))}
    </div>
  );
};

export default AllProducts;