import React from 'react'
import './ServicesStyle.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { MdOutlineCallEnd } from "react-icons/md";
import { Link } from 'react-router-dom';

const BrandStrategy = () => {
  return (
    <section>

    <NavBar/>

    <div>
      <main class="header-service-cont">
        <div className='Each-service-Hero'>Brand Strategy and Identity</div>
      </main>
       <section className='hero-section' >
           <div className='service-side-div' >
              <div className='services-itself'> 
              <Link to="/socialmediamarketing"  className='er'>  <p className='each-service'>Social Media Marketing</p> </Link>
              <Link to="/webdevelopment"  className='er'>  <p className='each-service'>Web Design & Development</p> </Link>
              <Link to="/brandstrategy"  className='er'>  <p className='each-service'>Brand Strategy and Identity</p> </Link>
              <Link to="/contentmarketing"  className='er'>  <p className='each-service'>Content Marketing</p> </Link>
              <Link to="/training"  className='er'>  <p className='each-service'>Training and Consulting</p> </Link>
              <Link to="/communitymanagement"  className='er'>  <p className='each-service'>Community Management and Engagement</p> </Link>
              </div>
             <div className='call-baground'>
              <p>Contact with  <br />us for any <br /> services</p>
              <MdOutlineCallEnd className='call-icon' />
              <p>+234 9047 957 855</p>
             </div>
             <Link to="/request"> 
                <button class="chat-btn-hero">Chat Us Now</button>
             </Link>
           </div>
           <div className='service-img-div'>
              <div className='service-img'>.</div>
              <h1>Services Overview</h1>
              <p> Your brand is more than a logo—it’s an experience. We help businesses <br /> 
                  build authentic, memorable identities that connect with their audience. <br /> 
                  Our strategy ensures that every brand element speaks the same language—yours!</p>
              <h1>Work Process</h1>
              <p>Let's work you briefly on how we work</p>
              <div className='work-proces-div'>
                <div className='work-proces-box'>
                  <div className='work-proces-img'></div>
                  <p> We discover your brand voice, mission, and 
                   values through a strategic consultation. </p>
                </div>
                <div className='work-proces-box'>
                  <div className='work-proces-img'></div>
                  <p> We design and align your visual and communication assets for consistent brand impact.</p>
                </div>
              </div>
           </div>
       </section>
    </div>


    <Footer/>
    </section>
  )
}

export default BrandStrategy