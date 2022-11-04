import React from 'react'

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data_testimonials = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni rem mollitia labore provident exercitationem similique dolores dolore eius accusamus aliquam modi reprehenderit fuga, placeat, id alias est quisquam! ',
  },
  {
    id: 1,
    avatar: AVTR2,
    name: 'client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni rem mollitia labore provident exercitationem similique dolores dolore eius accusamus aliquam modi reprehenderit fuga, placeat, id alias est quisquam! ',
  },
  {
    id: 1,
    avatar: AVTR3,
    name: 'client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni rem mollitia labore provident exercitationem similique dolores dolore eius accusamus aliquam modi reprehenderit fuga, placeat, id alias est quisquam! ',
  },
  {
    id: 1,
    avatar: AVTR4,
    name: 'client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni rem mollitia labore provident exercitationem similique dolores dolore eius accusamus aliquam modi reprehenderit fuga, placeat, id alias est quisquam! ',
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h4>Review From clients</h4>
      <h2>Testimonials</h2>

      <Swiper className="container container__testimonials"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data_testimonials.map(data => {
          return (
            <SwiperSlide key={data.id}>
              <div className="testimonial">
                <div className="client__avatar">
                  <img src={data.avatar} alt=""/>
                </div>
                <div className="text_contend">
                  <h4 className="client__name">{data.name}</h4>
                  <small className="client__reviw">
                    {data.review}
                  </small>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials