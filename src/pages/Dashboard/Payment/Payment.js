import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Payment = () => {
    const booking = useLoaderData();
    const { itemName, price } = booking;
    return (
        <div>
            <h2 className='text-success font-bold text-2xl'>Payment for {itemName} </h2>
            <p className='text-xl my-6'>Please pay <strong>$ {price}</strong></p>

        </div>
    );
};

export default Payment;