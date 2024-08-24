import React from 'react'
import "../Block/Home/Home.css";
import * as  constant from "../../src/Components/assets"

function Technologies() {
    const icons = [
        { src: constant.HTML, label: 'HTML / CSS' },
        { src: constant.JavaScript, label: 'JavaScript' },
        { src: constant.ReactNative, label: 'React Native' },
        { src: constant.ReactNative, label: 'React JS' },
        { src: constant.WordPress, label: 'WordPress' },
        { src: constant.Flutter, label: 'Flutter' },
        { src: constant.Angular, label: 'Angular' },
        { src: constant.RubyOnRail, label: 'Ruby on Rails' },
        { src: constant.Node, label: 'Node JS' },
        { src: constant.Laravel, label: 'Laravel' },
        { src: constant.Php, label: 'Php' },
        { src: constant.Vuejs, label: 'Vue Js' },
        { src: constant.Figma, label: 'Figma' },
        { src: constant.Android, label: 'Android' },
        { src: constant.IOS, label: 'IOS' },
        { src: constant.Photoshop, label: 'Photoshop' },
        { src: constant.Canva, label: 'Conva' },
      ];
  return (
    <div className="App-view">
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
      </div>
  )
}

export default Technologies
