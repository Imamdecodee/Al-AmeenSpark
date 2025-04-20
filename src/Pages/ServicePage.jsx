import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import '../Pages/ServicePage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import CallTag from '../Components/CallTag';
import { FaHome } from "react-icons/fa";
import Logo from "../assets/Images/Al-Ameen-logo.png";

const ServicePage = () => {
  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <section>
      <NavBar />
      
      <main>

        <div class="header">

          <div class="hero-cont" data-aos="flip-down" data-aos-duration="3000">
            <h1 class="services">Services</h1>
            <h5 class="slogan">We provide a wide range of services.</h5>
            <p class="para-note">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et animi consequatur 
              mollitia dolorum possimus voluptas veritatis molestiae? Asperiores, reiciendis.
            </p>
          </div>

        </div>

        
      <div class="help-sec">
        <h1 class="help">How can we help you?</h1>
        <p class="help-para">
        Al-Ameen Spark provides an array ofservices tailored to help businesses thrive
        in the digital landscape!
        </p>
      </div>

      <div className='service-hero'>
        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome />
             <h1>Social Media Marketing</h1>
             <p>Social media marketing, SEO, PPC
                campaigns, and email marketing to
                enhance brand visibility, engagement, and
                conversions</p>
          </div>
          <div className='service-hero-box'>
             <FaHome />
             <h1>Web Design & Development</h1>
             <p>   Designing user-friendly, SEO-optimized
                  websites that serve as the cornerstone of a
                  business’s online presence.</p>
          </div>
        </div>
        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome />
             <h1>Brand Strategy and Identity:</h1>
             <p>  Crafting unique brand messages, logos,
                  and visual identities to differentiate clients
                  from competitors.</p>
          </div>
          <div className='service-hero-box'>
             <FaHome />
             <h1>Content Marketing</h1>
             <p>  Delivering high-quality blogs, articles,
                  videos, and graphic designs to resonate
                  with target audiences </p>
          </div>
          
        </div>
        <div className='service-hero-divs'>
          <div className='service-hero-box'>
             <FaHome />
             <h1>Training and Consulting:</h1>
             <p> Providing workshops, team training, and  
              strategic advice to empower businesses
              with the skills they need to succeed</p>
          </div>
          <div className='service-hero-box'>
             <FaHome />
             <h1> Community Management and Engagement</h1>
             <p> Building and nurturing online
                 communities to foster brand loyalty and
                 trust</p>
          </div>
        </div>
        
      </div>

      <div className='our-coustomer'>
      <div class="help-sec">
        <h1 class="help">Our Customers!</h1>
        <p class="help-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus recusandae ex. <br />
          Adipisci veritatis quis non enim sunt maxime eum!
        </p>
        <div className='coustomer-logo'>
             <img className='Logo-coustomer' src= {Logo} alt="" />
             <img className='Logo-coustomer' src= {Logo} alt="" />
             <img className='Logo-coustomer' src= {Logo} alt="" />
             <img className='Logo-coustomer' src= {Logo} alt="" />
        </div>
      </div>

      </div>

    </main>
    <CallTag />
    <Footer />
    </section>
  )
}

export default ServicePage