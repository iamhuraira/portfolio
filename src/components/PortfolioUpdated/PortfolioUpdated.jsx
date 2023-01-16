import React from 'react'
import './PortfolioUpdated.css'
// import '../Portfolio/Portfolio.css'
import styled from 'styled-components'
import SliderComp from '../SliderComp/SliderComp'

const PortfolioUpdated = () => {
  return (

    <container>
    <div className="portfolio-container ">
      <div className="flexsp">
        <span>Recent Projects</span>
        <span>Portfolio</span>
      </div>
      <div className="slide-p">
        <SliderComp />
      </div>
    </div>
    </container>

  )
}

export default PortfolioUpdated
// const container = styled.div`
// width: 100%;
// max-width: 1280px;
// margin: 0 auto;
// padding: 3rem 0;
// `