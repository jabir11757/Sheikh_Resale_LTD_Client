import React from 'react';
import toast from 'react-hot-toast';

const Sellers = ({ sellers, index, refetch }) => {
    const { name, email, _id } = sellers;

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful');
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    sellers?.role !== 'admin' &&
                    <button onClick={() => handleMakeAdmin(_id)} className='btn btn-success btn-xs'>Make Admin</button>
                }
            </td>
            <td><button className='btn btn-error btn-xs'>delete</button></td>
        </tr>
    );
};

export default Sellers;