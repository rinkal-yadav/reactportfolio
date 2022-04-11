import React from 'react'
import codeboy from '../img/codeboy.png'

function Banner1() {
    return (
        <div className="banner">
            <div>
                <p className="banner-heading1">Hi, I am Rinkal</p>
                <p className="banner-heading2">A Fullstack Developer</p>

                <p className="banner-sub-head">Get ready to turn ideas into reality</p>
                <button className="btn-hire ">Hire Me</button><button className="btn-resume">Get Resume</button>

            </div>
            <div><img src={codeboy} alt=""/></div>
        </div>

    )
}

export default Banner1