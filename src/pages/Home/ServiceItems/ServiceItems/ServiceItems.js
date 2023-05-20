import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import SingleService from '../SingleService/SingleService';

const ServiceItems = () => {

    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl text-center font-bold my-12 dark:text-white">Service Categories</h1>
                <div className='grid grid-cols-4 space-x-6 space-y-4'>
                    {
                        services.map(service => <SingleService key={service.id} service={service} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default ServiceItems;