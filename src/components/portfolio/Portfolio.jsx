import React from 'react'
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
    title: 'Title1',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title2',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title3',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title4',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title5',
    github: 'https://github.com/',
    demo: '',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title',
    github: 'https://github.com/',
    demo: '#',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {
          data_portfolio.map(data => {
            return (
              <div className="portfolio__item">
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