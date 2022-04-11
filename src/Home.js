import React from 'react'
import Aboutme from './Component/Aboutme'
import Banner1 from './Component/Banner1'
import Banner2 from './Component/Banner2'
import Banner3 from './Component/Banner3'
import ContactForm from './Component/ContactForm'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Resume from './Component/Resume'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Resume/>
      {/* <Aboutme/> */}
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home