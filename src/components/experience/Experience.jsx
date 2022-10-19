import React from 'react'
import './Experience.css'
import { FaCheckCircle } from "react-icons/fa";
import portfolio1 from "../../assets/portfolio1.jpg"

const Experience = () => {
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
              <div className="progress-bar" style={{ width:"100%"}}>
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
              <div className="progress-bar" style={{ width:"90%"}}>
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
              <div className="progress-bar" style={{ width:"80%"}}>
                <span class="progress-bar-text">80%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>JavaScript</h4>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width:"90%"}}>
                <span class="progress-bar-text">90%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="skills__logo_container">
              <FaCheckCircle/>
              <h4>React</h4>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width:"70%"}}>
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
              <div className="progress-bar" style={{ width:"70%"}}>
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
              <div className="progress-bar" style={{ width:"50%"}}>
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