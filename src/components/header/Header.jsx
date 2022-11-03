import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jhonatan Mogollón</h1>
        <h5 className="text-ligth">Fullstack Development</h5>
  
        <CTA/>
        <div className="container__me_social animate__animated animate__fadeIn animate__slower">
          <HeaderSocials/>

          <div className="me ">
            <img src={ME} alt="" />
          </div>

          <a href="#contacts" className="scroll_down">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header