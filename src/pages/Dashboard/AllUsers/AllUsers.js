import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Users from './Users';


const AllUsers = () => {

    const { data: allUsers = [], refetch } = useQuery({
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
                        <th>Make Author</th>
                        <th>Action</th>
                        <th>Action Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((users, index) => <Users key={users._id} index={index} users={users} refetch={refetch} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;