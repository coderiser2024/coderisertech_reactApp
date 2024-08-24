import React from 'react'
import "./Career.css"
import Hero from '../../Components/Hero';
import * as  constant from "../../Components/assets"
import Career from '../../Components/Career';
import Service from '../../Components/Service';

function CareerPage() {
  return (
    <div className="page">
        <Hero
        // stylesCareer={{, right:0}}
        herosVideo={constant.Career}
        heading={'Join Our Team'}
        subheading={'Explore exciting career opportunities and grow with us in a dynamic and innovative environment.'}
      />
      <section className='career-contaoner'>
      <Career/>
      <Service/>
      </section>
    </div>
  )
}

export default CareerPage
