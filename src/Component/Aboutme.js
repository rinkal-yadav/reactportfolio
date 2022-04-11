import React from 'react'
import profile1 from '../img/profile1.png'
import profile2 from '../img/profile2.png'
import profile3 from '../img/profile3.png'

function Aboutme() {
    return (
        <div>
            <p className="banner2-content-head center2"  >What People say about me&nbsp;&nbsp;</p>


            <div className="people-profile">
                <div className="people-profile-cont">
                    <div className="profile-1">
                        <div className="first-person">
                            <div><img className="img1" src={profile1} alt=""/></div>
                            {/* <div ></div> */}
                        </div>

                        <div className="prof-details">
                            <span className="name">Elizabeth Martin</span> <br/>
                                <span className="proffession">SaveSpace Inc.</span>
                        </div>

                        <div className="prof-details">
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

                        </div>
                    </div>


                    <div className="profile-2">
                        <div className="second-person">
                        <div><img className="img2" src={profile2} alt=""/></div>

                            {/* <div ></div> */}
                        </div>

                        <div className="prof-details">
                            <span className="name">Alberto Donko</span> <br/>
                                <span className="proffession">ScreepApp</span>
                        </div>

                        <div className="prof-details">
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

                        </div>
                    </div>

                    <div className="profile-3">
                        <div className="third-person">
                        <div><img className="img3" src={profile3} alt=""/></div>

                            {/* <div "></div> */}
                        </div>

                        <div className="prof-details">
                            <span className="name">Alexander Parkinson</span> <br/>
                                <span className="proffession">MyTravel.com</span>
                        </div>

                        <div className="prof-details">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>

                        </div>
                    </div>
                </div>
                <div className="view-more"><a className="headLink" href=""><p className=" center3">View more Testimonilas →</p></a></div>

            </div>
        </div>
    )
}

export default Aboutme