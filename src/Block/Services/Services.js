import React from 'react';
import "./Services.css";
import * as  constant from "../../Components/assets"
import Hero from '../../Components/Hero';
import Technologies from '../../Components/Technologies';
import Service from '../../Components/Service';

function Services() {
  return (
    <div className="page">
      <Hero
        herosVideo={constant.ServiceHero}
        heading={'Explore Our Specialized Services'}
        subheading={'Each service is designed for top-notch quality and client satisfaction.'}
      />
      <Service/>
      <Technologies />
      
    </div>
  );
}

export default Services;
