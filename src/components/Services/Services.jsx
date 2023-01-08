import React from 'react'
import './Services.css'
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import resume from './Abu_Huraira_Resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
    const transition = { duration: 1, type : 'spring'};
  return (
      <div className="services" id='Services'>
          {/* Left Side */}
          <div className="awesome">
              <span>My Awesome</span>
              <span>services</span>
              <span>
                  I am highly proficient in React development and also have a great amount of expertise in
                  <br />
                  developing the Backend using Node.JS, Mongo, SQL.
              </span>
              <a href={resume} download> 
              <button className="button s-button">Download CV</button>
              </a>
              <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
          </div>
          {/* Right Side  */}
          <div className="cards" >
              <motion.div
                  whileInView={{ left: '11rem' }}
                  initial={{ left: '25rem' }}
                  transition={transition}

                  style={{ left: '11rem ' }}>
                  <Card emoji={HeartEmoji}
                      heading={'Front-End Developer'}
                      detail={'React, React Dom, Redux, Styled Components, MUI, Tailwind CSS, BootStrap'}
                      link={'https://www.upwork.com/freelancers/~018cce8136a7030f16?s=1110580755057594368'}
                      
                  />
              </motion.div>
              <motion.div
                  initial={{ left: '-25rem', top: '12rem' }}
                  whileInView={{ left: '-8rem' }}
                    transition={transition}
                  style={{ top: '12rem', left: '-8rem' }}>
                  <Card emoji={Glasses}
                      heading={'Full-Stack Developer'}
                      detail={'TypeScript, JavaScript, React, Node, Express, Next, MongoDB, Mongoose'} 
                      link={'https://www.upwork.com/freelancers/~018cce8136a7030f16'}
                      />
              </motion.div>
              <motion.div
                  whileInView={{ left: '9rem' }}
                  initial={{ left: '30rem', top: '19rem' }}
                  transition={transition}
                  style={{ left: '9rem ', top: '19rem' }}>
                  <Card emoji={Humble}
                      heading={'Back-End Developer'}
                      detail={'Node, Firbase,MongoDB, Mongoose, Axios, Auth, Error Handling, Data Modeling, Middleware'}
                      link={'https://www.upwork.com/freelancers/~018cce8136a7030f16?s=1110580748673863680'}
                  />
              </motion.div>

          </div>
          <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
   </div>
  )
}

export default Services