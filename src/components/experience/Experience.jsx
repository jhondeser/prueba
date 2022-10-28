import React, { useEffect }  from 'react'
import './Experience.css'
import { FaCheckCircle } from "react-icons/fa";
import portfolio1 from "../../assets/portfolio1.jpg"

const Experience = () => {
  useEffect(() => {
    let load = document.getElementById('animated_bar1')
    let load2 = document.getElementById('animated_bar2')
    let load3 = document.getElementById('animated_bar3')
    let load4 = document.getElementById('animated_bar4')
    let load5 = document.getElementById('animated_bar5')
    let load6 = document.getElementById('animated_bar6')
    let load7 = document.getElementById('animated_bar7')

    let bar_section = document.getElementById('experience')

    window.addEventListener('scroll',function() {
      let posicion_bar1 = bar_section.getBoundingClientRect().top;

      let screen_height = window.innerHeight/3.5;

      if (posicion_bar1 < screen_height) {
        load.classList.add('animate_100')
        load2.classList.add('animate_90')
        load3.classList.add('animate_90')
        load4.classList.add('animate_70')
        load5.classList.add('animate_70')
        load6.classList.add('animate_70')
        load7.classList.add('animate_50')
      }
    })
  });
  
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>HTML</h4>
            </div>
            <div className="progress">
              <div id="animated_bar1" className="progress-bar" style={{ width:"100%"}}>
                <span class="progress-bar-text">100%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>Css</h4>
            </div>
            <div className="progress">
              <div id="animated_bar2" className="progress-bar" style={{ width:"90%"}}>
                <span class="progress-bar-text">90%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>Bootstrap</h4>
            </div>
            <div className="progress">
              <div id="animated_bar3" className="progress-bar" style={{ width:"90%"}}>
                <span class="progress-bar-text">90%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>JavaScript</h4>
            </div>
            <div className="progress">
              <div id="animated_bar4" className="progress-bar" style={{ width:"70%"}}>
                <span class="progress-bar-text">70%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>React</h4>
            </div>
            <div className="progress">
              <div id="animated_bar5" className="progress-bar" style={{ width:"70%"}}>
                <span class="progress-bar-text">70%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>Node js</h4>
            </div>
            <div className="progress">
              <div id="animated_bar6" className="progress-bar" style={{ width:"70%"}}>
                <span class="progress-bar-text">70%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>python</h4>
            </div>
            <div className="progress">
              <div id="animated_bar7" className="progress-bar" style={{ width:"50%"}}>
                <span class="progress-bar-text">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </section>
  )
}

export default Experience