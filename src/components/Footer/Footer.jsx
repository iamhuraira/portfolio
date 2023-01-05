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
                  <LinkedIn color='white' size='3rem' />
                  <Insta color='white' size='3rem' />
                  <Github color='white' size='3rem' />
              </div>
          </div>
   </div>
  )
}

export default Footer; 