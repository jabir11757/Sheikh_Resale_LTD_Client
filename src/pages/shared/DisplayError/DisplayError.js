import React from 'react';
import err from '../../../images/404.jpg'
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();

    const handleLogOut = () => {

    }
    return (
        <div className='grid grid-cols-1'>

            <div className='text-center'>
                <p className='text-red-400'>Something went wrong!</p>
                <p className='text-red-600'>{error.statusText || error.message}</p>
                <h4 className='text-xl'>Please <Link><button className='btn btn-outline' onClick={handleLogOut}>Sign Out</button></Link></h4>
            </div>
            <div className='mt-8 flex justify-center'>
                <img className='rounded-3xl' src={err} alt='error' />
            </div>

        </div>
    );
};

export default DisplayError;