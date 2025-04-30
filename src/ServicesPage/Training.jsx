import React from 'react'
import './ServicesStyle.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { MdOutlineCallEnd } from "react-icons/md";
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <section>

    <NavBar/>

    <div>
      <main class="header-service-cont">
        <div className='Each-service-Hero'>Training & Consulting</div>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error <br />
                accusamus quo ut dolorem tenetur animi, fuga odit iure explicabo <br />
                rerum incidunt sed impedit quia natus eveniet cupiditate temporibus? Soluta! <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error <br />
                accusamus quo ut dolorem tenetur animi, fuga odit iure explicabo <br />
                rerum incidunt sed impedit quia natus eveniet cupiditate temporibus? Soluta!</p>
              <h1>Work Process</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum harum </p>
              <div className='work-proces-div'>
                <div className='work-proces-box'>
                  <div className='work-proces-img'></div>
                  <p>Lorem ipsum dolor sit amet, consectetur <br />  adipisicing elit. Rem doloribus <br /> 
                    Consectetur neque quod iusto ducimus!</p>
                </div>
                <div className='work-proces-box'>
                  <div className='work-proces-img'></div>
                  <p>Lorem ipsum dolor sit amet, consectetur  <br /> adipisicing elit.Rem doloribus <br /> 
                    Consectetur neque quod iusto ducimus !</p>
                </div>
              </div>
           </div>
       </section>
    </div>


    <Footer/>
    </section>
  )
}

export default Training