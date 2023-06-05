import React from 'react';
import Processes from '../Processes/Processes';
import ServiceItems from '../ServiceItems/ServiceItems/ServiceItems';
// import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';
import OurServices from '../OurServices/OurServices';
import AllProducts from '../AllProducts/AllProducts';
import OurTeams from '../OurTeams/OurTeams';
import "./Home.css"
import Reviews from '../Reviews/Reviews';

const Home = () => {

    return (
        <div className='home'>
            <Slider />
            {/* <Services /> */}
            <ServiceItems />
            <OurServices />
            <Processes />
            <AllProducts />
            <OurTeams />
            <Reviews />
            <Subscribe />
        </div>
    );
};

export default Home;