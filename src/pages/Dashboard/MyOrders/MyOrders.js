import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/ProviderContext/ProviderContext';
import Orders from './Orders';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const uri = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: myBookings = [] } = useQuery({
        queryKey: ['myBookings', user?.email],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBookings.map(bookings => <Orders key={bookings._id} bookings={bookings} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;