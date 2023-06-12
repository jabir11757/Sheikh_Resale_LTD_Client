import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProductDetail from "./AllProductDetail";

const AllProductsDetail = () => {
  const productsDetails = useLoaderData();
  const { product } = productsDetails;
  console.log("Single Product", product);
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 lg:grid-cols-2">
        {product.map((productDetails, index) => (
          <AllProductDetail key={index} productDetails={productDetails} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsDetail;
