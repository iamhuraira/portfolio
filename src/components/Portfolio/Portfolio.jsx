import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Food from "../../img/food.png"
import Netflix from "../../img/netflix.png"
import cofena from "../../img/cofeena.png"
import portfolio from "../../img/portfolio.png"
import 'swiper/css';

const Portfolio = () => {
  return (
      <div className="portfolio" id='Portfolio'>
          {/* Heading */}
          <span>Recent Projects</span>
          <span>Portfolio</span>
         
          {/* Slider */}
          <Swiper
             spaceBetween={-100}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
          >
              <SwiperSlide>
                  <img src={portfolio} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Food} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Netflix} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={cofena} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Ecommerce} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={HOC} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={MusicApp} alt="" /> 
              </SwiperSlide>
          </Swiper>
   </div>
  )
}

export default Portfolio