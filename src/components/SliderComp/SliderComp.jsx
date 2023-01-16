import React, { useRef } from 'react'
import Slider from 'react-slick';
import ProjectComp from '../ProjectComp/ProjectComp';
import './Slidercomp.css'
// import Sidebar from "../../img/sidebar.png"
// import Ecommerce from "../../img/ecommerce.png"
// import HOC from "../../img/hoc.png"
// import MusicApp from "../../img/musicapp.png"
// import Food from "../../img/food.png"
// import Netflix from "../../img/netflix.png"
// import cofena from "../../img/cofeena.png"
import portfolio from "../../img/cv.png"
import ec from "../../img/ec.jpg"
import eco from "../../img/eco.png"
import ecoo from "../../img/ecoo.png"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components';
import TestSlider from '../TestSlider/TestSlider';

const SliderComp = () => {
  const arrowRef = useRef(null);
  let data = [
    {
      img: portfolio,
      disc: 'Portfolio Website',
      link:''
    },
    {
      img: ec,
      disc: 'Netflix Clone',
      link: ''
    },
    {
      img: eco,
      disc: 'Food Delivery Web App',
      link: ''
    },
    {
      img: ecoo,
      disc: 'Cofena Website',
      link: ''
    },
   
  /*   {
      img: Ecommerce,
      disc: 'Testing Website',
      link: ''
    },
    {
      img: HOC,
      disc: 'HOC Testing Image',
      link: ''
    } */
  ]
  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
           centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           centerMode: false
        }
      }
    ]
  };
   let sliderproject = "";
  sliderproject = data.map((item, index) => (
      <TestSlider item={item} key={index} />
    // <ProjectComp item={item} key={index} />
    // console.log(item);
  ));
  return (
    <container1 style = {{position :'relative'}}>

      <Slider ref={arrowRef} {...settings}>
        {sliderproject}
      </Slider>
      <Buttons>
        <button
        onClick={()=> arrowRef.current.slickPrev()}
          className='back' ><IoIosArrowBack />  </button>
        <button
        onClick={()=> arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </container1>
  )
}

export default SliderComp;
const Buttons = styled.div`
button{
  width:2rem;
  height: 2rem;
  ${'' /* background-color: rgba(255,255,255, 0.100); */}
  cursor: pointer;
  color: var(--orange);
  border : none;
position : absolute;
top: 45%;
border-radius: 50%;
}
.next{
  right : -1rem;
  @media screen and (min-width : 480px) and (max-width: 800px) {
    right : 2rem;
  }
}
.back{
  left : -28.5rem;
  @media screen and (min-width: 320px )  and (max-width: 480px){
    left : -8.3rem;
  }
  @media screen and (min-width : 480px) and (max-width: 800px) {
     left : -13.5rem;
  }
}

`