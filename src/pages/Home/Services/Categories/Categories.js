import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Category from './Category';


const Categories = () => {
    const categories = useLoaderData();
    const [item, setItem] = useState(null)
    const { product } = categories;
    return (
        <div className='flex justify-center'>
            <div className='grid gap-6 lg:grid-cols-2'>
                {
                    product.map((category, index) => <Category key={index} setItem={setItem} category={category} />)
                }
            </div>
            {
                item && <BookingModal product={product} item={item} />
            }
        </div>
    );
};

export default Categories;