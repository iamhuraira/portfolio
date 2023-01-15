import React from 'react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Food from "../../img/food.png"
import Netflix from "../../img/netflix.png"
import cofena from "../../img/cofeena.png"
import portfolio from "../../img/portfolio.png"
import './ProjectComp.css'

const ProjectComp = (props) => {
    const { img, disc, link } = props.item;
    return (
        <div className="project">
            <div className="imageDiv">
                <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
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

export default ProjectComp