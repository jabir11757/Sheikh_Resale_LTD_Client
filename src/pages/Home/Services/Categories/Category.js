import React from 'react';

const Category = ({ category }) => {
    const { productName, postTime, picture, location, resalePrice, originalPrice, condition, useYear, mobileNumber, purchaseYear } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-16">
            <div className="card-body">
                <h2 className="text-green-600">Post Time: <span className='text-black'>{postTime}</span></h2>
                <h2 className="text-green-600">Product Name: <span className='text-black font-bold'>{productName}</span></h2>
                <h2 className="text-green-600">Condition: <span className='text-black'>{condition}</span></h2>
                <h2 className="text-green-600">Purchase Year: <span className='text-black'>{purchaseYear}</span></h2>
                <h2 className="text-green-600">Original Price: <span className='text-black'>${originalPrice}</span></h2>
                <h2 className="text-green-600">Resale Price: <span className='text-red-400 font-bold'>${resalePrice}</span></h2>
                <h2 className="text-green-600">Use Year: <span className='text-black'>{useYear}</span></h2>
                <h2 className="text-green-600">Location: <span className='text-black'>{location}</span></h2>
                <h2 className="text-green-600">Contact: <span className='text-black'>{mobileNumber}</span></h2>
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-success mb-6'>Buy Item</button>
            </div>
            <figure><img src={picture} alt="Shoes" /></figure>
        </div>
    );
};

export default Category;