import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import '../Pages/ContactPage.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import CallTag from '../Components/CallTag';

const ContactPage = () => {
  return (
    <section>
      <NavBar />
      <main>

        <div class="header">

          <div class="hero-cont" data-aos="flip-up" data-aos-duration="3000">
            <h1 class="services">Contact Us</h1>
            <h5 class="slogan">Contact for Premium Business Services .</h5>
            <p class="para-note">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et animi consequatur 
              mollitia dolorum possimus voluptas veritatis molestiae? Asperiores, reiciendis.
            </p>
          </div>
        </div>
    </main>
         
        <div className='contact-hero'>
                
        <div class="strategy-cont">

          <h1>Book A Strategy Call</h1>
          <div className='map-message'>

            <div className='message'>
              <input type="text"placeholder='Your Name:' />
              <input type="email"placeholder='Your Email:' />
              <input  type="message"placeholder='Your Message:' />
              <button className='submit-btn'> Submit</button>
            </div>

            <div className='message-map'></div>
          </div>

        </div>
     <div className='Get-in-touch'>

            <h1>Get In Touch</h1>

          <div className='Reach-us'>
            <p>Get In Touch</p>
            <div className='git-info'>
              <FaHome className='info-icon' /> 
              <p>Rt,88 ilorin Kwara state</p>
             </div>
             <div className='git-info'>
              <MdEmail className='info-icon' /> 
              <p>alameenthespark@gmail.com</p>
             </div>
             <div className='git-info'>
              <FaPhoneVolume className='info-icon' />
              <p>+234 9165-769-896</p>
             </div>
             <div className='git-info'>
               <MdPhoneIphone className='info-icon' />
              <p>+234 9047-957-855</p>
             </div>
            </div>
           
           <div className='contact-info'>
            <h6>Contact us for free</h6>
            <h1  className='for-free'>09161699509</h1>
           </div>

          </div>
         </div>

      <CallTag />
      <Footer />
    </section>
  )
}

export default ContactPage