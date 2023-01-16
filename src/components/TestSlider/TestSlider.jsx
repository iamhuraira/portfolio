import React from 'react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Food from "../../img/food.png"
import Netflix from "../../img/netflix.png"
import cofena from "../../img/cofeena.png"
import portfolio from "../../img/portfolio.png"
import cv from "../../img/cv.png"
import '../ProjectComp/ProjectCompcopy.css'
import styled from 'styled-components'

const TestSlider = (props) => {
    const { img, disc, link } = props.item;
 
    return (
        <div className="project projectClass">
            <div className="imageDiv  "  style={{height : '10rem'}}>
                <img src={img} alt=""   />
                <div className="livelink">
                    <span className='p-name'>
                        {disc}: <a href={link}>
                            Demo
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TestSlider

