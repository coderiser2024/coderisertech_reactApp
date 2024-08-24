import React from 'react';
import "../Block/Home/Home.css";
import * as  constant from "../Components/assets"
function Contact() {
  return (
    <div className="page">
      <section className="content">
        <h2>Our About</h2>
      </section>
      <section className='abnoutSection'>
        <div>
          <img src={constant.aboutImg} alt="img" className='aboutImg' />
        </div>
        <div className='aboutDescription'>
          <h2>innovative software applications</h2>
          <p className='aboutTxt'>Coderiser Technologies is a forward-thinking technology company dedicated to transforming ideas into impactful solutions. We specialize in the development of innovative software applications that revolutionize industries and elevate user experiences.</p>
          <p className='aboutTxt'>Client satisfaction is our top priority at Coderiser Technologies. We prioritize understanding our clients' needs, maintain open communication throughout the process, and go above and beyond to ensure their success.</p>
          <p className='aboutTxt'>Our mission is to harness the power of technology to drive positive change, solving complex challenges, and empowering our clients to thrive in the digital age.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
