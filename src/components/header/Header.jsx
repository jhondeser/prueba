import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  useEffect(() => {
    let container_header = document.getElementById('header');
    let container_social = document.getElementById('me__social')

    window.addEventListener('scroll',function() {
      let posicion_header = container_header.getBoundingClientRect().top;
      console.log(posicion_header);
      let screen_height = window.innerHeight/3.5;
      console.log(screen_height);

      if (posicion_header < screen_height) {
        container_social.classList.add('animate__animated','animate__fadeInDown','animate__slow')
        container_social.style.display='flex'
      }
    })
  })

  return (
    <header id="header">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Jhonatan Mogollón</h1>
        <h4 className="text-ligth">Fullstack Development</h4>
  
        <CTA/>
        <div id="me__social" className="container__me_social">
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