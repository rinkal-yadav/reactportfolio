import React from 'react'
import resumeboy from '../img/resumeboy.png'

function Resume() {
    return (
        <div>
            <p className="banner2-content-head center"  >Resume&nbsp;</p>
            <div className="banner4">
                <div className="banner4-detail-box">
                    <span className="banner4-title">Work Experience</span>
                    <hr/>

                        <div className="resume-circle-border">
                            <div className="border-circle1"></div>
                            <div className="border-line"></div>
                            <div className="border-circle2"></div>
                        </div>
                        <div className="work-exp">
                            <div className="work-place">
                                Senior Fullstack Developer - FULLTIME
                                <p>Facebook, Inc.</p>
                            </div>
                            <div className="work-year">2020-2021</div>
                            <div className="work-place">
                                Senior Fullstack Developer - FULLTIME
                                <p>Facebook, Inc.</p>
                            </div>
                            <div className="work-year">2020-2021</div>
                        </div>

                        <span className="banner4-title">Education</span>
                        <hr/>
                            <div className="resume-circle-border">
                                <div className="border-circle1"></div>
                                <div className="border-line2"></div>

                            </div>

                            <div className="work-exp">
                                <div className="work-edu">
                                    Columbia University
                                    <p>Master in Software Engineering</p>
                                </div>
                                <div className="work-year">2020-2021</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                                similique sapiente voluptates amet porro fugit! Commodi iusto temporibus
                                aut et dicta consequatur similique, consequuntur, nemo quia
                            </p>




                        </div>
                        <div className="banner4-imgs">
                            <div className="banner4-img-box"><img className="banner4-img" src={resumeboy} alt=""/></div>
                            <div className="banner4-img-content">
                                <a href="www.facebook.com"><i className="fab fa-facebook "></i></a>
                                <a href="www.linkedin.com"><i className="fab fa-linkedin size linkedin"></i></a>
                                <a href="www.github.com"><i className="fab fa-github"></i></a>

                            </div>
                        </div>
                </div>
            </div>
            )
}

            export default Resume