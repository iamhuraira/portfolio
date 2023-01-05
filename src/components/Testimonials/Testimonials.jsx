import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilepic1 from "../../img/profile1.jpg"
import profilepic2 from "../../img/profile2.jpg"
import profilepic3 from "../../img/profile3.jpg"
import profilepic4 from "../../img/profile4.jpg"
import profilepic5 from "../../img/profile5.jpg"
import profilepic6 from "../../img/profile6.jpg"
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilepic1,
            name: "Emma Doe",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
         {
             img: profilepic2,
             name: "Andrew Smith",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
          
           {
               img: profilepic3,
               name: "Kathrine Smith",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
            {
                img: profilepic4,
                name: "Micelle Smith",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
             {
                 img: profilepic5,
                 name: "Jonas Smith",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            img: profilepic6,
            name: "Nora Smith",
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        }
    ]
  return (
      <div className="t-wrapper">
          <div className="t-heading">
              <span>Client always get </span>
              <span>Exceptional Work </span>
              <span>From me...   </span>
              <div className="blur t-blur1" style={{background : "var(--purple)"}}></div>
              <div className="blur t-blur2" style={{background : "skyblue"}}></div>
          </div>
          {/* Slider */}
          <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{clickable: true}}
          >
              {
                  clients.map((client, index) => {
                      return (
                          <SwiperSlide key={index}>
                              <div className="testimonial">
                                  <img src={client.img} alt="" />
                                  <span>{client.name}</span>
                                  <span>{client.review}</span>
                              </div>
                          </SwiperSlide>
                      )
                  })
              }
          </Swiper>
  </div>
  )
}

export default Testimonials