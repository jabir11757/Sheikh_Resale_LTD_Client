import React from 'react';

const AddedProducts = ({ product, index, handleDelete }) => {

    const { name, resalePrice, _id } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{resalePrice}</td>
            <td><button className="btn btn-ghost btn-xs">available</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">delete</button></td>
        </tr>
    );
};

export default AddedProducts;