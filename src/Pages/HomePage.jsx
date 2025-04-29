import React, { useEffect } from 'react'
import './HomePage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaHome } from "react-icons/fa";
import latifat from "../assets/Images/SML.jpg"
import Nafisat from "../assets/Images/S.E.O.jpg"
import Rodiyah from "../assets/Images/MANAGER.jpg"
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <section>

    <NavBar />
    <main>

      <div class="header" id="hero-home">

        <div class="hero-cont" data-aos="fade-up" data-aos-duration="3000">
          <h4 class="welcome">Welcome To</h4>
          <h1 class="ameen">Al-Ameen Spark</h1>
          <p>Igniting Brands, Sparking Growth</p>
          <Link to="/each-service"> 
           <button class="request-btn-hero">Request Service</button>
          </Link>
        </div>

      </div>

      <section class="help-sec">
        <h1 class="help">How can we help you?</h1>
        <p class="help-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus recusandae ex. <br />
          Adipisci veritatis quis non enim sunt maxime eum!
        </p>
      </section>    <div className='service-hero'>
        
        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1>Social Media Marketing</h1>
             <p>Social media marketing, SEO, PPC
                campaigns, and email marketing to
                enhance brand visibility, engagement, and
                conversions</p>
          </div>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1>Web Design & Development</h1>
             <p>   Designing user-friendly, SEO-optimized
                  websites that serve as the cornerstone of a
                  business’s online presence.</p>
          </div>
        </div>

        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1>Brand Strategy and Identity:</h1>
             <p>  Crafting unique brand messages, logos,
                  and visual identities to differentiate clients
                  from competitors.</p>
          </div>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1>Content Marketing</h1>
             <p>  Delivering high-quality blogs, articles,
                  videos, and graphic designs to resonate
                  with target audiences </p>
          </div>
          
        </div>

        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1>Training and Consulting:</h1>
             <p> Providing workshops, team training, and  
              strategic advice to empower businesses
              with the skills they need to succeed</p>
          </div>
          <div className='service-hero-box'>
             <FaHome class="course-icon"/>
             <h1> Community Management and Engagement</h1>
             <p> Building and nurturing online
                 communities to foster brand loyalty and
                 trust</p>
          </div>
        </div>
        
      </div>


      <div className='meet-the-team-section'>
     <div className='Team-text'>
      <h1>Meet Our Leadership</h1>
      <p className='text-meet-team'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, adipisci ullam. Itaque
         quasi quibusdam necessitatibus impedit eius blanditiis ut suscipit nobis tempora, .</p>
     </div>
     <div className='picture-divs'>
           <div className='picture-box'>
             <div className='team-pics' > </div>  
              <h4>Miqdad Bada</h4>
              <p className='team-position'>Founder</p>
           </div>
           <div className='picture-box'>
            <div className='team-pics-2'> </div>  
              <h4>Jamal Opeyemi</h4>
              <p className='team-position'>S.E.O</p>
           </div>
           <div className='picture-box'>
             <div className='team-pics-3'> </div> 
              <h4>Muhammad Bada</h4>
              <p className='team-position'>Manager</p>
           </div>
     </div>

   </div>

     

    </main>
     <CallTag />
     <Footer />
    </section>
  )
}

export default HomePage