import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ bookings }) => {
    const { itemName, price, _id } = bookings;
    return (
        <tr>
            <td> {itemName}</td>
            <td>{price}</td>
            <th>
                {
                    price &&
                    <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-success btn-xs">Pay</button></Link>
                }

            </th>
        </tr>
    );
};

export default Orders;