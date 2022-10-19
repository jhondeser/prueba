import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
      <footer>
        <div className="container container__footer">
          <a href="#" className='footer__logo'>jhondeser</a>
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>

          <div className="footer__socials">
            <a href="https://www.facebook.com/"><AiFillFacebook/></a>
            <a href="https://www.instagram.com/"><AiFillInstagram/></a>
          </div>
          <div className="footer__copyright">
            <small>&copy; JHONDESER web development. All rights reserved.</small>
          </div>
        </div>
      </footer>
  )
}

export default Footer