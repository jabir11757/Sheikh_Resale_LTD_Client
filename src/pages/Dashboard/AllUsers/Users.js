import React from "react";
import toast from "react-hot-toast";

const Users = ({ users, index, refetch }) => {
  const { name, email, _id } = users;

  const handleMakeAdmin = (id) => {
    fetch(
      `https://assignment-product-resale-server-jabir11757.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };
  const handleMakeSeller = (id) => {
    fetch(
      `https://assignment-product-resale-server-jabir11757.vercel.app/users/seller/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make seller successful");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {users?.role !== "admin" && (
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="btn btn-success btn-xs"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleMakeSeller(_id)}
          className="btn btn-success btn-xs"
        >
          Make Seller
        </button>
      </td>
      <td>
        <button className="btn btn-error btn-xs">delete</button>
      </td>
    </tr>
  );
};

export default Users;
