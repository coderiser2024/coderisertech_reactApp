import React from 'react';
import "./About.css";
import AboutUs from "../../Components/AboutUs"
import Hero from '../../Components/Hero';

import {Heros2V,misionAbout,VisionAbout,GoalAbout} from "../../Components/assets"

function About() {
  return (
    <div className="page">
      <Hero
        herosVideo={Heros2V}
        heading={'Passionate about delivering exceptional'}
        subheading={'At Coderiser, we are passionate about creating innovative software solutions that drive success. Established in 2023, our mission is to empower businesses with cutting-edge technology and unparalleled expertise.'}
      />
      <AboutUs />

      <div className="mission">
        <div className='misionDescription'>
          <h2>Mission</h2>
          <p className='aboutTxt'>To lead the forefront of technological evolution by delivering unparalleled mobile and web applications, fueled by a passion for innovation, commitment to excellence, and a relentless pursuit of customer satisfaction.</p>
          <p className='aboutTxt'>We strive to cultivate a culture of collaboration, diversity, and continuous improvement, driving positive change and exceeding expectations at every turn.</p>
        </div>
        <div>
          <img src={misionAbout} alt="img" className='misionAboutImg' />
        </div>
      </div>

      <div className="mission1">
        <div>
          <img src={VisionAbout} alt="img" className='misionAboutImg1' />
        </div>
        <div className='misionDescription1'>
          <h2>Vision</h2>
          <p className='aboutTxt1'>To lead the forefront of technological evolution by delivering unparalleled mobile and web applications, fueled by a passion for innovation, commitment to excellence, and a relentless pursuit of customer satisfaction. We strive to cultivate a culture of collaboration, diversity, and continuous improvement, driving positive change and exceeding expectations at every turn.</p>
          <p className='aboutTxt1'>We strive to cultivate a culture of collaboration, diversity, and continuous improvement, driving positive change and exceeding expectations at every turn.</p>
        </div>
      </div>

      <div className="mission">
        <div className='misionDescription'>
          <h2>Our Goals</h2>
          <ul>
            <li className='aboutTxt'>Strategic Thinker: Proficient in strategic planning to drive high-level achievements.</li>
            <li className='aboutTxt'>Performance Optimization: Skilled in identifying and implementing performance metrics for continuous improvement.</li>
            <li className='aboutTxt'>Talent Development: Committed to nurturing talent through strategic development programs.</li>
            <li className='aboutTxt'>Adaptive Leadership: Capable of fostering an adaptive organizational culture to navigate change effectively.</li>
            <li className='aboutTxt'>Success Celebration: Dedicated to celebrating milestones and fostering a culture of achievement.</li>
            <li className='aboutTxt'>Collaborative Approach: Strong advocate for collaboration to propel the company towards ambitious goals.</li>
          </ul>
        </div>

        <div>
          <img src={GoalAbout} alt="img" className='misionAboutImg' />
        </div>
      </div>
    </div>
  );
}

export default About;
