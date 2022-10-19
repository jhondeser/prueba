import React from 'react'
import './about.css'
import  ME from '../../assets/me-about.png'
import { FaAward } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>+ 4 Years Working</small>
            </div>

            <div className="about__card">
              <FaUserFriends className="about__icon"/>
              <h5>Clients</h5>
              <small>200 + Worlwide</small>
            </div>

            <div className="about__card">
              <FaFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>+50 Completed</small>
            </div>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, at dolores. Velit, facilis iure, laborum nemo odit quibusdam quae quisquam fuga harum illum expedita corrupti ratione vero eligendi maxime reprehenderit?</p>

          <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About