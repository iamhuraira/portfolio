import React from 'react'
import './PortfolioUpdated.css'
import '../Portfolio/Portfolio.css'
import SliderComp from '../SliderComp/SliderComp'

const PortfolioUpdated = () => {
  return (
    <div className="portfolio-container ">
      <div className="flexsp">

        <span>Recent Projects</span>
        <span>Portfolio</span>
      </div>
      <div className="slide-p">
        <SliderComp />
      </div>
    </div>
  )
}

export default PortfolioUpdated