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

<div class="hero-cont-about" data-aos="flip-down" data-aos-duration="3000">
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
  <button class="request-btn-hero">Request Quote</button>
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
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
                  </p>
               </div>
             </div>

           <div className='process-hero-divs'>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>03.</h1>
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
                  </p>
               </div>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>04.</h1>
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
                  </p>
               </div>
             </div>
             <div className='process-hero-divs'>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>05.</h1>
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
                  </p>
               </div>
               <div className='Proces-hero-box'>
                  <h1 className='number-proces'>06.</h1>
                  <h1 className='discover'> Discover</h1>
                  <p className='p-process'> We begin by understanding your brand,
                      goals, audience, and challenges. This
                      phase involves deep research and audits to uncover insights that inform strategy.
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