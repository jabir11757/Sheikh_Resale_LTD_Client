import React from 'react';
import Image3 from "../../../images/image-banner7.jpg"

const Slider = () => {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
            <div className='flex justify-center items-center mx-12'>
                <div>
                    <h1 className='text-4xl font-semibold text-gray-700'>Headline is the most <br /> <span className='text-blue-600'>Important</span> thing in the web world</h1>
                    <p className='mt-6'>Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex Product
                        Similique quas ea veniam Tempore quasi porro Blanditiis aut mollitia ex
                    </p>
                    <div className='mt-4'>
                        <button className='h-12 w-32 text-white bg-gray-700 rounded'>Button</button>
                        <button className='h-12 w-32 text-white bg-gray-700 rounded mx-2'>Button</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div style={{ borderTopRightRadius: "200px", borderTopLeftRadius: "200px" }} className='flex justify-center items-center bg-gray-600'>
                    <img style={{ borderTopRightRadius: "150px", borderTopLeftRadius: "150px" }} className='h-3/4 w-3/4' src={Image3} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Slider;