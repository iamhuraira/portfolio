import React from 'react'
import './Footer.css'
import Wave from '../../img/wave1.png'

import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt=""  style={{width : '100%'}}/>
          <div className="f-content">
              <span>Iamhuraira429@gmail.com</span>
              <div className="f-icons">
                  <a href='https://www.linkedin.com/in/iamhuraira/' target='_blank'>
                  <LinkedIn color='white' size='3rem' />
                  </a>
                  <a href='https://www.instagram.com/i_am_huraira_/' target='_blank'>
                  <Insta color='white' size='3rem' />
                  </a>
                  <a href='https://github.com/iamhuraira' target='_blank'>
                  <Github color='white' size='3rem' />
                  </a>
              </div>
          </div>
   </div>
  )
}

export default Footer; 