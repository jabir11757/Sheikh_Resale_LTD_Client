import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Sellers from './Sellers';


const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSellers.map((sellers, index) => <Sellers key={sellers._id} index={index} sellers={sellers} refetch={refetch} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;