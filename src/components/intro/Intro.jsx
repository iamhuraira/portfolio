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
import { motion } from 'framer-motion';

const Intro = () => {
    const transition = { duration: 2, type : 'spring'};
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>  Hy! I am </span>
                  <span>Abu Huraira</span>
                  <span>MERN Stack Developer with high level of experience in web development and producing the Quality work</span>
              </div>
              <a  href='https://www.upwork.com/freelancers/~018cce8136a7030f16' target='_blank'>  
              <button className=" button i-button">Hire Me</button>
              </a>
              <div className="i-icons">
                  <a href='https://github.com/iamhuraira' target='_blank'><img src={Github} alt="Github" /></a>
                  <a href='https://www.linkedin.com/in/iamhuraira/' target='_blank'><img src={Linkedin} alt="Linkedin" /> </a>
                  {/* <a><img src={Instagram} alt="Instagram" /></a> */}
              </div>
         </div>
          <div className="i-right">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={boy} alt="" />
              <motion.img
                  initial={{ left: '-36%' }}
                  whileInView={{ left: '-20%' }}
                  transition={transition}
                  src={glassesimoji} alt="" />
              <motion.div
                  initial={{ left: '74%', top: '-1%' }}
                  whileInView={{ left: '65%' }}
                  transition={transition}
                  
                  style={{ top: '-1%', left: '65%' }}
                className='floating-div'
              >
                  <FloatingDiv image={Crown} txt1={'MERN Stack'} txt2={'Developer'} />
              </motion.div>
              <motion.div
                  initial={{ left: '9rem', top: '17rem' }}
                  whileInView={{ left: '0rem' }}
                  transition={transition}
                  style={{ top: '17rem', left: '0' }}
                  className='floating-div'>
                  <FloatingDiv image={thumbup} txt1={'Raising Talent'} txt2={'Award'} />
              </motion.div>
              {/* Blur Div */}
              <div className="blur" style={{ background: "rgb(238 210 255)" }}> </div>
              <div className="blur b-2" style={{ background: "#C1f5ff", top: '17rem', width:'22rem' , height: '11rem', left : '-9rem'   }}> </div>
         </div>
    </div>
  )
}

export default Intro