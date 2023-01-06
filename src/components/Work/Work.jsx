import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Linkedin from '../../img/linkedwork.png'
import Github from '../../img/githubwork.png' 
import Facebook from '../../img/Facebook.png'
import {motion} from 'framer-motion'
const Work = () => {
  return (
      <div className="works">
          <div className="awesome">
              <span>Works for All these</span>
              <span>Brands & Clients</span>
              <span>
                  I'm highly proficient in React development and also have a great amount of expertise in
                  <br />
                  developing Backend using Node.JS, Mongo, SQL.
                  <br />
                  I'm working with the latest technologies and frameworks. I'm also a great team player.
              </span>
              {/* <a href={resume} download> */}
                  <button className="button s-button">Hire me</button>
              {/* </a> */}
              <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
          </div>
          {/* Right Side */}
          <div className="w-right">
              <motion.div 
                  initial={{ rotate: 45 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ margin: "-40px" }}
                  transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle">
                  <div className="w-secCircle">
                      <img src={Upwork} alt="upwork" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Fiverr} alt="upwork" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Github} alt="upwork" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Facebook} alt="upwork" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Linkedin} alt="upwork" />
                  </div>
                  {/* Background Circles */}
                  <div className="w-backCircle blueCircle"></div>
                  <div className="w-backCircle yellowCircle"></div>
              </motion.div>
        </div>

   </div>
  )
}

export default Work