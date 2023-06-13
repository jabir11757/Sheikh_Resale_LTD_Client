import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ bookings }) => {
  const { itemName, price, _id, paid } = bookings;
  return (
    <tr>
      <td> {itemName}</td>
      <td>{price}</td>
      <th>
        {price && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn bg-gray-500 btn-xs">Pay</button>
          </Link>
        )}
        {price && paid && <span className="text-success font-bold">paid</span>}
      </th>
    </tr>
  );
};

export default Orders;
