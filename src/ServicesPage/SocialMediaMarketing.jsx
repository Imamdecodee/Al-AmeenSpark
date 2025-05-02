import React from 'react'
import './ServicesStyle.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { MdOutlineCallEnd } from "react-icons/md";
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  return (
    <section>

    <NavBar/>

    <div>
      <main class="header-service-cont">
        <div className='Each-service-Hero'>Social Media Marketing</div>
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
              <div className='SMM-service-img'>.</div>
              <h1>Services Overview</h1>
              <p>We don’t just post—we position. At Al-Ameen Spark, we craft data-driven social <br />
                 media strategies that attract, engage, and convert. From content <br />
                 planning to audience growth, we help you build a powerful online presence  <br />
                 that aligns  with your brand goals. <br />
              </p>
              <h1>Work Process</h1>
              <p>Let's work you briefly on how we work </p>
              <div className='work-proces-div'>
                <div className='work-proces-box'>
                  <div className='SMM-2-proces-img'></div>
                  <p> We analyze your brand and audience to develop a tailored content and engagement strategy.</p>
                </div>
                <div className='work-proces-box'>
                  <div className='SMM-2-proces-img'></div>
                  <p> We create, schedule, and optimize content while tracking performance for continuous growth. </p>
                </div>
              </div>
           </div>
       </section>
    </div>


    <Footer/>
    </section>
  )
}

export default SocialMediaMarketing