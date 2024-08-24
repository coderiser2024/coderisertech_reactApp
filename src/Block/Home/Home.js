import React from 'react';
import Hero from '../../Components/Hero';
import AboutUs from '../../Components/AboutUs'
import Technologies from '../../Components/Technologies';
import Achievements from '../../Components/Achievements';
import "./Home.css"
import * as  constant from "../../Components/assets"

function Home() {
  const certificate = [
    { src: constant.MSME },
    { src: constant.AICTE },
    { src: constant.ISO },
    { src: constant.MicroSoft },
    { src: constant.AWS },
  ];

  return (
    <div className="page">
      <Hero
        herosVideo={constant.Heros1V}
        heading={'Welcome to Coderiser'}
        subheading={'Innovate. Create. Succeed.'}
      />
      <AboutUs />
      <Technologies />
      {/* <div className="App-view">
        <div>
          <h2 className='aboutTxth2'>Embracing Advanced Technologies</h2>
          <h2 className='aboutTxth3'> Our Technical Prowess</h2>
          <p className='aboutTxt'>At Coderiser Technologies, we utilize state-of-the-art technologies and exceptional expertise to craft innovative and robust solutions customized to meet your specific needs.</p>
        </div>
        <marquee class="marq"
          direction="left"
          scrollamount="8"
          behavior="alternate"
          loop="3"
        >
          <div className="scroll-container">
            <div className="scroll-row">
              {icons.map(item => (
                <div key={item.id} className="scroll-item">
                  <img src={item.src} alt={item.name} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </marquee>
      </div> */}

      <section className="herosection">
        <div>
          <h2 className='aboutTxtclient-service'>How Can We Help You with Coderiser!</h2>
          <p className='aboutTxt-service'>This is where you can introduce your services or any key message you want to highlight.</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="service-grid">
            <ServiceBox
              img={constant.MobileService}
              title="Mobile Development"
              description="Custom mobile app development for iOS and Android."
            />
            <ServiceBox
              img={constant.WebService}
              title="Web Development"
              description="Full-stack web development services using modern technologies."
            />
            <ServiceBox
              img={constant.UI_UXService}
              title="UI/UX Design"
              description="User-centered design solutions for intuitive interfaces."
            />
            <ServiceBox
              img={constant.WebService}
              title="WordPress Development"
              description="Custom WordPress theme and plugin development."
            />
            <ServiceBox
              img={constant.QAServices}
              title="QA & Testing"
              description="Comprehensive quality assurance and testing services."
            />
            <ServiceBox
              img={constant.BackendService}
              title="Backend Development"
              description="Specialization in server-side technologies including Node.js, Ruby on Rails, and Python. Building robust, scalable, and secure backend systems to support your web and mobile applications."
            />
            <ServiceBox
              img={constant.SEOService}
              title="SEO"
              description="Expert SEO services to improve your website's visibility on search engines. We use proven strategies and techniques to enhance your online presence, drive organic traffic, and increase conversions."
            />
            <ServiceBox
              img={constant.SecurityService}
              title="Security"
              description="Code Structure Security, Secure Coding Practices, Continuous Monitoring, Access Management, Encryption and Data Protection."
            />
          </div>
        </div>
      </section>

      <Achievements />

      <section className='clientDescription'>
        <div>
          <h2 className='aboutTxtclient'>Our mission: complete client success</h2>
          <p className='aboutTxt'>We are dedicated to ensuring the success of our clients by providing exceptional, client-centered service. Our approach is built on understanding unique needs, delivering innovative solutions, and fostering collaborative partnerships. With a commitment to integrity and measurable impact, we strive to exceed expectations and drive tangible results, making our clients' success our foremost priority.</p>
        </div>
        <div>
          <marquee class="marq" direction="left">
            <img src={constant.logo} alt="img" className='marqlogo' />
            <img src={constant.logo} alt="img" className='marqlogo' />
            <img src={constant.logo} alt="img" className='marqlogo' />
            <img src={constant.logo} alt="img" className='marqlogo' />
            <img src={constant.logo} alt="img" className='marqlogo' />
          </marquee>
        </div>
      </section>
      
      <div className="certifite-container">
        <div>
          <h2 className='aboutTxtAchievements'>Recognition and accolades received by Coderiser for excellence in software development and innovation.</h2>
          <p className='aboutTxt-achievements'>Over the years, we’ve partnered with numerous startups and large enterprises, providing them with a virtual development center. Our team has delivered exceptional solutions, earning us multiple awards and accolades for our superior work.</p>
        </div>
        <div className="logo-container">
          {certificate.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function ServiceBox({ title, description, img }) {
  return (
    <div className="service">
      <img src={img} alt="img" className='serviceAboutImg' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Home;
