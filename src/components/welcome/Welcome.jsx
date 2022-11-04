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
      console.log(posicion_header);
      let screen_height = window.innerHeight/3.5;
      console.log(screen_height);

      if (posicion_header < screen_height) {
        particles.style.position = 'fixed';
        explore_btn.style.display = 'none';
      }
    })

    function update() {
      setInterval(() => {
        if (particles.style.position === 'fixed') {
          document.body.scrollIntoView();
        }
      }, 1000);
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