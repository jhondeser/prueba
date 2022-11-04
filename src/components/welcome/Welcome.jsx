import React, { useEffect }  from 'react'
import "./welcome.css"

const Welcome = () => {
  useEffect(() => {
    let particles = document.getElementById('particles-js');
    let explore_btn = document.getElementById('explore_btn');
    let header_section = document.getElementById('header');


    explore_btn.onclick = () => {
      particles.style.position = 'fixed';
      explore_btn.style.display = 'none';
    }

    window.addEventListener('scroll',function() {
      let posicion_header = header_section.getBoundingClientRect().top;
      let screen_height = window.innerHeight/3.5;
      

      if (posicion_header < screen_height) {
        particles.style.position = 'fixed';
        explore_btn.style.display = 'none';
        
        update(particles);
      }
    })

    function update(element) {
      console.log('hola',element);
      if (element.data('done')) {
        return;
      }

      document.body.scrollIntoView();

      element.data('done', true);
    }

    
  })

  return (
    <section id="welcome">
      <div className="particles__btn_cont">
          <a id="explore_btn" href="#header" class="btn btn-primary">Explore</a>
      </div>      
    </section>
  )
}

export default Welcome