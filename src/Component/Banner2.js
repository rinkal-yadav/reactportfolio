import React from 'react'
import html from '../img/logo/html.png'
import css from '../img/logo/css.png'
import js from '../img/logo/js.png'
import react from '../img/logo/react.png'
import github from '../img/logo/github.png'
import bootstrap from '../img/logo/bootstrap.png'
import reactnative from '../img/logo/reactnative.png'
import codeboy from '../img/codeboy.png'




function Banner2() {
  return (
    <div className="banner2">
    <div className="banner2-img-box"><img src={codeboy} alt="" /></div>
    <div className="banner2-content-box">
        <div className="banner2-content-head" >About Me&nbsp;&nbsp;&nbsp; </div>
        <p>I'm a web designer & fullstack developer with 6
            months of professional experience. I'm interested 
            in all kinds of visual communication, but my major
            focus is on designing web, mobile & tablet interfaces. 
            I also have skills in other fields like branding, 
            icon design or web development.</p>
        <p>I enjoy turning complex problems into simple, 
            beautiful and intuitive designs. When I'm not
             pushing pixels, you'll find me 
            cooking, gardening or working out in the park.</p>
            <div className="banner2-content2">
                <p>Languages/Library/Technology</p><div className="content-lib"></div>
                <div className="logo-box">
                    <img className="logo" src={html} alt=""/>
                    <img className="logo" src={css} alt=""/>
                    <img className="logo" src={js} alt=""/>
                    <img className="logo" src={react} alt=""/>
                    <img className="logo" src={github} alt=""/>
                    <img className="logo" src={bootstrap} alt=""/>
                    <img className="logo" src={reactnative} alt=""/>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Banner2