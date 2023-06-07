import React from "react";
import Processes from "../Processes/Processes";
import ServiceItems from "../ServiceItems/ServiceItems/ServiceItems";
// import Services from '../Services/Services';
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import OurServices from "../OurServices/OurServices";
import OurTeams from "../OurTeams/OurTeams";
import "./Home.css";
import Reviews from "../Reviews/Reviews";
import UrgentSells from "../AllProducts/UrgentSells";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      {/* <Services /> */}
      <Processes />
      <ServiceItems />
      <OurServices />
      <UrgentSells />
      <OurTeams />
      <Reviews />
      <Subscribe />
    </div>
  );
};

export default Home;
