import React from 'react'
import "./intro.css";
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
              <img src={glassesimoji} alt="" />
              <div style={{top: '-1%', left:'65%'}}>
                  <FloatingDiv image={Crown} txt1={'MERN'} txt2={'Developer'} />
              </div>
              <div style={{ top: '17rem', left: '0' }}>
                  <FloatingDiv image={thumbup} txt1={'Raising Talent'} txt2={'Award'} />
              </div>
              {/* Blur Div */}
              <div className="blur" style={{ background: "rgb(238 210 255)" }}> </div>
              <div className="blur" style={{ background: "#C1f5ff", top: '17rem', width:'22rem' , height: '11rem', left : '-9rem'   }}> </div>
         </div>
    </div>
  )
}

export default Intro