import React from 'react'
import back from '../img/project/back.jpeg'
import todouiweb from '../img/project/todouiweb.png'
import todouiresponsive from '../img/project/todouiresponsive.png'
import digitalclock from '../img/project/digitalclock.png'
import reactBlog from '../img/project/reactBlog.jpeg'
import eCom from '../img/project/eCom.jpeg'




function Banner3() {
    return (
        <div>
            <p className="banner3-content-head center"  >My Portfolio&nbsp;&nbsp;</p>

            <div className="banner3">
                <div className="banner3-box-img1"><img className="banner3-img1" src={back} alt=""/></div>
                <div className="banner3-box-img1"><img className="banner3-img1" src={todouiweb} alt=""/></div>
                <div className="banner3-box-img1"><img className="banner3-img1" src={todouiresponsive} alt=""/></div>
                <div className="banner3-box-img1"><img className="banner3-img1" src={digitalclock} alt=""/></div>
                <div className="banner3-box-img1"><img className="banner3-img1" src={reactBlog} alt=""/></div>
                <div className="banner3-box-img1"><img className="banner3-img1" src={eCom} alt=""/></div>
            </div>
        </div>
    )
}

export default Banner3