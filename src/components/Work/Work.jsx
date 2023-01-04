import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Linkedin from '../../img/linkedwork.png'
import Github from '../../img/githubwork.png' 
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
                  <button className="button s-button">Download CV</button>
              {/* </a> */}
              <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
          </div>
   </div>
  )
}

export default Work