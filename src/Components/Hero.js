import React from 'react';
import './Header.css';

function Hero({herosVideo, heading, subheading}) {
  return (
    <section className="hero">
       <video autoPlay muted loop className="video-background">
        <source src={herosVideo} type="video/mp4" />
        Your browser does not support the video tag.    
      </video>
      <div className="hero-content">
        <h1 className='headingTxt'>{heading}</h1>
        <p className='headerSubtxt'>{subheading}</p>
      </div>
    </section>
  );
}

export default Hero;
