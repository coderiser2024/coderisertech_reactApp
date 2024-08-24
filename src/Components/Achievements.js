import React from 'react'
import "../Block/Home/Home.css";
import * as  constant from "../../src/Components/assets"

function Achievements() {
  const imageSources = [
    {src:constant.Victories0},
    {src:constant.Victories2},
    {src:constant.Victories11},
    {src:constant.Victories4},
    {src:constant.Victories5},
    {src:constant.Victories6},
    {src:constant.Victories7},
    {src:constant.Victories8},
    {src:constant.Victories9},
    {src:constant.Victoriess},
  ];
  return (
    <section className='success-achievements'>
        <div>
          <h2 className='aboutTxtAchievements'>Our Achievements</h2>
          <p className='aboutTxt-achievements'>Developed impeccable digital products, focused on industry requirements, by engaging India's premier talent, ensuring client satisfaction</p>
        </div>
        <div>
          <marquee class="marq" direction="left"
           scrollamount="8"
           behavior="alternate"
           loop="3">
              <img src={constant.Victories0} alt="img" className='achievements-service' />
              <img src={constant.Victories2} alt="img" className='achievements-service' />
              <img src={constant.Victories11} alt="img" className='achievements-service' />
              <img src={constant.Victories4} alt="img" className='achievements-service' />
              <img src={constant.Victories5} alt="img" className='achievements-service' />
              <img src={constant.Victories6} alt="img" className='achievements-service' />
              <img src={constant.Victories7} alt="img" className='achievements-service' />
              <img src={constant.Victories8} alt="img" className='achievements-service' />
              <img src={constant.Victories9} alt="img" className='achievements-service' />
              <img src={constant.Victoriess} alt="img" className='achievements-service' />
          </marquee>
        </div>
      </section>
  )
}

export default Achievements
