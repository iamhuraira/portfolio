import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
      <div className="experience" id='Experience'>
          {/* Heading */}
          <span className='e-my'>My Work Experience</span>
          <span className='e-m'>Experience</span>

          <div className="exp">
              
          <div className="achievement">
              <div className="circle">1+</div>
              <span>years</span>
              <span>Experience</span>     
         </div> 
          <div className="achievement">
              <div className="circle">3+</div>
              <span>completed</span>
              <span>Projects</span>     
         </div> 
          <div className="achievement">
              <div className="circle">2+</div>
              <span>companies</span>     
              <span>Work</span>     
         </div> 
        </div> 
   </div>
  )
}

export default Experience