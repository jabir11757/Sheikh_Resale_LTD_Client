import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../shared/Loading/Loading';
import ServiceItem from './ServiceItem';


const Services = () => {

    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('products.json');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl text-success font-bold text-center'>Services</h2>

            <div>
                {
                    services.map(service => <ServiceItem key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;