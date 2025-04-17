import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import '../Pages/ServicePage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

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

    </main>
    </section>
  )
}

export default ServicePage