import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const categories = useLoaderData();
    const { product } = categories;
    return (
        <div className='flex justify-center'>
            <div className='grid gap-6 lg:grid-cols-2'>
                {
                    product.map((category, index) => <Category key={index} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;