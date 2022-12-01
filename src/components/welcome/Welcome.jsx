import React, { useEffect }  from 'react'
import "./welcome.css"

const Welcome = () => {
  useEffect(() => {
    let particles = document.getElementById('particles-js');
    let explore_btn = document.getElementById('explore_btn');
    let header_section = document.getElementById('header');
    let about_section = document.getElementById('about')
    let experience_section = document.getElementById('experience')
    let portfolio_section = document.getElementById('portfolio')
    let testimonials_section = document.getElementById('testimonials')
    let contacts_section = document.getElementById('contacts')
    let softskills_section = document.getElementById('soft-skills')
    
    let secctions_arry = [header_section, about_section, experience_section, portfolio_section, testimonials_section, contacts_section, softskills_section]
    
    secctions_arry.forEach(data => {
      data.style.display = 'none'
    })

    explore_btn.onclick = () => {
      particles.style.position = 'fixed';
      explore_btn.style.display = 'none';
      secctions_arry.forEach(data => {
        data.style.display = 'block'
      })
    }    
  })

  return (
    <section id="welcome">
      <div className="particles__btn_cont">
          <a id="explore_btn" href="#header" class="btn btn-primary">About Me</a>
      </div>      
    </section>
  )
}

export default Welcome