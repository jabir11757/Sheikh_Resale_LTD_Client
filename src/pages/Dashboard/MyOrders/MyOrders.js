import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/ProviderContext/ProviderContext';
import Loading from '../../shared/Loading/Loading';
import Orders from './Orders';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const uri = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data
        }
    })

    if (isLoading) {
        return <Loading />
    }
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
                        myOrders.map(bookings => <Orders key={bookings._id} bookings={bookings} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;