import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Linkedin from '../../img/linkedwork.png'
import Github from '../../img/githubwork.png' 
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'

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
              <a href='https://www.upwork.com/freelancers/~018cce8136a7030f16' target='_blank'>
                  <button className="button s-button">Hire me</button>
              </a>
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
                      <a href='https://www.upwork.com/freelancers/~018cce8136a7030f16' target='_blank'>
                      <img src={Upwork} alt="upwork" />
                      </a>
                  </div>
                  <div className="w-secCircle">
                      <a href='https://www.fiverr.com/huraira429' target='_blank'>
                      <img src={Fiverr} alt="Fiver" />
                      </a>
                  </div>
                  <div className="w-secCircle">
                      <a href='https://github.com/iamhuraira' target='_blank'>
                      <img src={Github} alt="Github" />
                      </a>
                  </div>
                  <div className="w-secCircle">
                      <a href='https://web.facebook.com/hurairaarrain2/' target='_blank'>
                      <img src={Facebook} alt="Facebook" />
                      </a>
                  </div>
                  <div className="w-secCircle">
                      <a href='https://www.linkedin.com/in/iamhuraira/' target='_blank'>
                      <img src={Linkedin} alt="LinkedIn" />
                      </a>
                  </div>
                  {/* Background Circles */}
              </motion.div>
                  <div className="w-backCircle blueCircle"></div>
                  <div className="w-backCircle yellowCircle"></div>
        </div>

   </div>
  )
}

export default Work