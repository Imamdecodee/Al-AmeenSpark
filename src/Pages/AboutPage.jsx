import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import '../Pages/AboutPage.css'
import CallTag from '../Components/CallTag'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <section>
      <NavBar />
      <div class="header">

<div class="hero-cont-about" data-aos="fade-up" data-aos-duration="3000">
  <h1 class="about">About Us:</h1>
  <h5 class="a-slogan">We provide a wide range of services.</h5>
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
  <Link to="/request"> 
    <button class="request-btn-hero">Request Service</button>
  </Link>
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

   <div className='D-6-Process-section'>
    <h1>Our-6-D-Process</h1>
       <div className='process-section-divs'>
           <div className='process-hero-divs'>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>01.</h1>
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
                  </p>
               </div>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>02.</h1>
                  <h1 className='discover'> Define </h1>
                  <p className='p-process'> We clearly outline your digital marketing objectives, success 
                    metrics, and strategic direction—ensuring alignment with your business vision.
                  </p>
               </div>
             </div>

           <div className='process-hero-divs'>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>03.</h1>
                  <h1 className='discover'> Design </h1>
                  <p className='p-process'> Our creative team brings ideas to life with compelling content, visuals,
                     campaigns, and experiences tailored to your brand identity and target audience.
                  </p>
               </div>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>04.</h1>
                  <h1 className='discover'>  Develop  </h1>
                  <p className='p-process'> We execute strategies using cutting-edge tools, platforms, and 
                    technologies—whether it's building websites, setting up email funnels, or launching
                     digital campaigns.
                  </p>
               </div>
             </div>
             <div className='process-hero-divs'>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>05.</h1>
                  <h1 className='discover'> Deploy  </h1>
                  <p className='p-process'> With precision and timing, we launch campaigns and content across relevant 
                    platforms—ensuring everything is optimized for visibility and engagement.
                  </p>
               </div>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>06.</h1>
                  <h1 className='discover'>  Drive  </h1>
                  <p className='p-process'> Post-launch, we analyze results, optimize performance, and scale what works.
                     We stay committed to continuous growth and long-term success.
                  </p>
               </div>
             </div>
      </div>
   </div>
      

      <CallTag />
      <Footer />
    </section>
  )
}

export default AboutPage