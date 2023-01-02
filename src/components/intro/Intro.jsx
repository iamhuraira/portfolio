import React from 'react'
import "./intro.css";
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

const Intro = () => {
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>  Hy! I am </span>
                  <span>Abu Huraira</span>
                  <span>MERN Stack Developer with high level of expereance in web development and producing the Quality work</span>
              </div>
              <button className=" button i-button">Hire Me</button>
              <div className="i-icons">
                  <a href=''><img src={Github} alt="Github" /></a>
                  <a><img src={Linkedin} alt="Linkedin" /> </a>
                  <a><img src={Instagram} alt="Instagram" /></a>
              </div>
         </div>
          <div className="i-right">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={boy} alt="" />
         </div>
    </div>
  )
}

export default Intro