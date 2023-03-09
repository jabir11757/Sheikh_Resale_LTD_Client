import React from 'react';
import Processes from '../Processes/Processes';
import ServiceItems from '../ServiceItems/ServiceItems/ServiceItems';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {

    return (
        <div>
            <Slider />
            <Services />
            <ServiceItems />
            <Processes />
            <Subscribe />
        </div>
    );
};

export default Home;