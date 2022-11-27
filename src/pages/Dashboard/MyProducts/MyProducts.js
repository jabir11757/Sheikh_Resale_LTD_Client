import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddedProducts from './AddedProducts';

const MyProducts = () => {

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addedProducts');
            const data = res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-bold text-success text-center mb-6'> My Products</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Sale Status</th>
                        <th>Action Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myProducts.map((product, index) => <AddedProducts key={product._id} index={index} product={product} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;