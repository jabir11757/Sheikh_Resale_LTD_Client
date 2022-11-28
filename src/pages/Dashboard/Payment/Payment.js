import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <h2>Payment for {booking.itemName}</h2>
        </div>
    );
};

export default Payment;