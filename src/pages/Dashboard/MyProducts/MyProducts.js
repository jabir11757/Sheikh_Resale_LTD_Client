import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../shared/Loading/Loading";
import AddedProducts from "./AddedProducts";

const MyProducts = () => {
  const [myProduct, setMyProduct] = useState([]);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addedProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-product-resale-server-jabir11757.vercel.app/addedProducts"
      );
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(
        `https://assignment-product-resale-server-jabir11757.vercel.app/addedProducts/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Item Deleted!");
            const remaining = myProduct.filter((prd) => prd._id !== id);
            setMyProduct(remaining);
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-700 text-center mt-4 mb-16">
        {" "}
        My Products
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Sale Status</th>
            <th>Action Button</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, index) => (
            <AddedProducts
              key={product._id}
              index={index}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
