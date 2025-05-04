import React, { useEffect } from 'react'
import './HomePage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaHome } from "react-icons/fa";
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

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
          <Link to="/request"> 
           <button class="request-btn-hero">Request Service</button>
          </Link>
        </div>

      </div>

      <section class="help-sec">
        <h1 class="help">How can we help you?</h1>
        <p class="help-para">
         At Al-Ameen Spark, we craft innovative digital marketing solutions tailored to your brand’s unique goals. 
         Whether you're looking to grow your online presence, engage your audience, or drive measurable results,
         our expert team is here to bring your vision to life with strategy, creativity, and precision.
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
      <p className='text-meet-team'> Behind every successful strategy is a team that leads with purpose. Our
         leadership team brings a wealth of experience, vision, and passion for excellence. Get to know the minds 
         driving Al-Ameen Spark’s mission to revolutionize the digital space and empower brands to thrive.</p>
     </div>
     <div className='picture-divs'>
           <div className='picture-box'>
             <div className='team-pics' > </div>  
              <h4>Muhammad Bada</h4>
              <p className='team-position'>Founder</p>
              <div>
              <Link to="https://www.linkedin.com/in/rejoice-ogine-8b6634285">  <FaFacebookSquare  class="team-link"/></Link>
              <Link to="https://www.facebook.com/share/1DXsaJPc1c/">      <FaLinkedin  class="team-link"/>   </Link>
              </div>
           </div>

           <div className='picture-box'>
            <div className='team-pics-2'> </div>  
            <h4>  Nafisat Abisola Odedeyi </h4>
            <p className='team-position'>Chief Operating officer </p>
            <div>
              <Link to="https://www.facebook.com/share/1DXsaJPc1c/">  <FaFacebookSquare  class="team-link"/></Link>
              <Link to="https://www.facebook.com/share/1DXsaJPc1c/">      <FaLinkedin  class="team-link"/>   </Link>
              </div>
           </div>

           <div className='picture-box'>
             <div className='team-pics-3'> </div> 
             <h4>   Rejoice Ogine</h4>
              <p className='team-position'>Head of strategy</p>
              <div>
              <Link to="https://www.facebook.com/share/1DXsaJPc1c/">  <FaFacebookSquare  class="team-link"/></Link>
              <Link to="https://www.facebook.com/share/1DXsaJPc1c/">      <FaLinkedin  class="team-link"/>   </Link>
              </div>
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