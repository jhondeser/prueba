import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data_portfolio = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie Application',
    github: 'https://github.com/',
    demo: 'http://movieapp.jhondeser.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blockchain Folder',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pokedex Appi',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Architecture Folder',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ecommerce',
    github: 'https://github.com/',
    demo: '',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Profile Folder',
    github: 'https://github.com/',
    demo: '#',
  }
]

const Portfolio = () => {
  useEffect(() => {
    let portfolio__item = document.querySelectorAll('.portfolio__item');

    portfolio__item.forEach(element => {

      element.onmouseover = () => {
        element.classList.add('animate__animated','animate__pulse');
      }

      element.onmouseout = () => {
        element.classList.remove('animate__animated','animate__pulse');
      }
    });
  })

  return (
    <section id="portfolio">
      <h4>My Recent work</h4>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {
          data_portfolio.map(data => {
            return (
              <div id={'item_id' + data.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={data.image} alt="" />
                </div>
                <h3>{data.title}</h3>
                <div className="portfolio__item_btn">
                  <a href={data.github} className="btn">GitHub</a>
                  <a href={data.demo} className="btn btn-primary">Live Demo</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}



export default Portfolio