import React from 'react'
import "../Block/Services/Services.css";
import * as  constant from "../Components/assets";

function Service() {
  return (
    <div className="container" style={{marginBottom: 50}}>
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service">
            <img src={constant.WebService} alt="img" className='serviceAboutImg' />
            <h3>Web Development</h3>
            <p>Proficiency in React JS for building dynamic and responsive web applications. Specialization in Ruby on Rails for robust and scalable web development. WordPress development for creating customizable and user-friendly websites. Node.js development for building fast and scalable server-side applications.</p>
          </div>
          <div className="service">
            <img src={constant.MobileService} alt="img" className='serviceAboutImg' />
            <h3>Mobile App Development</h3>
            <p>Expertise in React Native and Flutter for cross-platform mobile app development.</p>
          </div>
          <div className="service">
            <img src={constant.UI_UXService} alt="img" className='serviceAboutImg' />
            <h3>UI/UX Design</h3>
            <p>Dedicated UI/UX design services to create intuitive and visually appealing interfaces for web and mobile applications.</p>
          </div>
          <div className="service">
            <img src={constant.CustomService} alt="img" className='serviceAboutImg' />
            <h3>Custom Software Solutions</h3>
            <p>Tailored solutions leveraging a combination of technologies to address unique business requirements and challenges.</p>
          </div>
          <div className="service">
            <img src={constant.QAServices} alt="img" className='serviceAboutImg' />
            <h3>QA & Teasting</h3>
            <p>"QA & Teasing" blends rigorous software testing with a friendly, playful team atmosphere, ensuring both quality assurance and positive morale among colleagues.</p>
          </div>
          <div className="service">
            <img src={constant.BackendService} alt="img" className='serviceAboutImg' />
            <h3>Backend Development</h3>
            <p>Specialization in server-side technologies including Node.js, Ruby on Rails, and Python. Building robust, scalable, and secure backend systems to support your web and mobile applications.</p>
          </div>
          <div className="service">
            <img src={constant.ProductService} alt="img" className='serviceAboutImg' />
            <h3>Product Development</h3>
            <p>Comprehensive product development services from ideation to deployment. Our team collaborates closely with clients to design, develop, and launch products that meet market demands and drive business growth.</p>
          </div>
          <div className="service">
            <img src={constant.SEOService} alt="img" className='serviceAboutImg' />
            <h3>SEO</h3>
            <p>Expert SEO services to improve your website's visibility on search engines. We use proven strategies and techniques to enhance your online presence, drive organic traffic, and increase conversions.</p>
          </div>
          <div className="service">
            <img src={constant.SecurityService} alt="img" className='serviceAboutImg' />
            <h3>Security</h3>
            <p>Code Structure Security, Secure Coding Practices, Continuous Monitoring, Access Management, Encryption and Data Protection.</p>
          </div>
        </div>
      </div>
  )
}

export default Service
