import React, { useEffect } from 'react'
import './HomePage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
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
          <Link to="/request"> 
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
      </section>

    </main>
     <CallTag />
     <Footer />
    </section>
  )
}

export default HomePage