import React from 'react';
import Processes from '../Processes/Processes';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>
            <Slider />
            <Services />
            <Processes />
        </div>
    );
};

export default Home;