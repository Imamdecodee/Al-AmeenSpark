import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import '../Pages/AboutPage.css'
import CallTag from '../Components/CallTag'

const AboutPage = () => {
  return (
    <section>
      <NavBar />
      <div class="header">

<div class="hero-cont" data-aos="flip-down" data-aos-duration="3000">
  <h1 class="services">About Us:</h1>
  <h5 class="slogan">We provide a wide range of services.</h5>
  <p class="para-note">
         Al-Ameen Spark is a dynamic digital
         marketing agency based in Ilorin, Nigeria,
         but offer service in a entire world and that
         why weoperate romotely,dedicated to
         helping businesses of all sizes succeed in
         the digital world. Our team of creative
         experts, strategists, and developers work
         collaboratively to deliver innovative,
         value-driven solutions
  </p>
</div>

</div>

<div className='statment-hero'>
    <div className='statement-box'>
      <div className='dash-line'>  .</div>
      <h1>Vision Statement</h1>
      <p>To revolutionize digital marketing by
         empowering businesses with innovative,
         value-driven, and result-oriented solutions,
         fostering sustainable growth, and driving
          impactful digital transformation</p>
    </div>
    <div className='statement-box'>
      <div className='dash-line'>.</div>
      <h1>Mission Statement</h1>
      <p>To provide cutting-edge, affordable,
         and scalable digital marketing solutions
         that bridge the gap between businesses
         and their customers by leveraging
         creativity, technology, and data-driven
         strategies</p>
    </div>
    <div className='statement-box'>
      <div className='dash-line'>.</div>
      <h1>Core Values</h1>
      <p>
        <li>Excellence</li>
        <li>Integrity </li>
        <li>Innovation: </li>
        <li>Collaboration: </li>
        <li>Customer-Centricity </li>
        </p>
    </div>
   </div>

      <CallTag />
      <Footer />
    </section>
  )
}

export default AboutPage