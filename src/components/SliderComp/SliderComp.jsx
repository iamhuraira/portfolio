import React from 'react'
import Slider from 'react-slick';
import ProjectComp from '../ProjectComp/ProjectComp';
import './Slidercomp.css'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Food from "../../img/food.png"
import Netflix from "../../img/netflix.png"
import cofena from "../../img/cofeena.png"
import portfolio from "../../img/portfolio.png"

let data = [
  {
    img: portfolio,
    disc: 'Portfolio Website In React Js: ',
    link:''
  },
  {
    img: Netflix,
    disc: 'Netflix Clone In React Js: ',
    link: ''
  },
  {
    img: Food,
    disc: 'Food Delivery Web App In React Js: ',
    link: ''
  },
  {
    img: cofena,
    disc: 'Cofena Website in Simple HTML,CSS: ',
    link: ''
  },
 
  {
    img: Ecommerce,
    disc: 'Testing Website: ',
    link: ''
  },
  {
    img: Sidebar,
    disc: 'Testing  Website: ',
    link: ''
  },
  {
    img: MusicApp,
    disc: 'Testing Music App: ',
    link: ''
  },
  {
    img: HOC,
    disc: 'HOC Testing Image: ',
    link: ''
  }
]
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const SliderComp = () => {
  let sliderproject = "";
  sliderproject = data.map((item, index) => {
    <ProjectComp item={item} key={index} />
  });
  return (
  
    <Slider {...settings}>
     {sliderproject}
    </Slider>
  )
}

export default SliderComp