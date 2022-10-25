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
          <p>
            I'm a digital nomad searching for adventure, travel, and knowledge.
            I am passionate about new technologies such as 
            artificial intelligence, the Internet of Things (IoT), big data,
            Blockchain, 3D printing, drones, gene editing, and 5G. 
            That's why I have developed a professional career in this area of work. 

            I have more than 4 years of experience in the areas of developing
            web and pedagogy in the digital world, which has allowed me to hone my skills,
            with a strong knowledge of the frontend branch, and on track to be a full-stack developer.

            My dream is to travel around the world creating different platforms 
            that contribute to the solution and automation of processes in different places and cultures. 
            Contributing to the development of education from the branch of technology
          </p>

          <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About