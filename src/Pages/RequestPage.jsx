import React, { useEffect } from 'react'
import './RequestPage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsIncognito } from "react-icons/bs";


const RequestPage = () => {
  useEffect(()=> {
      AOS.init();
    }, [])
  return (
    <section>

    <NavBar/>

    <main class="header-cont">
      <div class="head-cont" data-aos="zoom-in-down" data-aos-duration="3000" >
        <h1 class="reserve">SERVICE RESERVATION</h1>
        <p class="res-para">Home <span class="bk">/Booking</span></p>
      </div>
    </main>

    <div class="sec-2-cont">
      <h1>RESERVE A SERVICE</h1>
      <p>CALL US +234 917-957-855 OR COMPLETE THE FORM BELOW</p>
    </div>

    <section class="reserve-sec">
      <main class="res-cont">

        <div class="input-cont-box">

          <div class="input-slot">
            <p class="label">Your Name</p>
            <div class="input-box">
              <input placeholder='full name' type="text" />
              <MdOutlineTypeSpecimen class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Email Address</p>
            <div class="input-box">
              <input placeholder='Enter Email ID' type="email" />
              <MdOutlineEmail class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Start Time</p>
            <div class="input-box">
              <input placeholder='Pick a Time' type="time" />
              <MdAccessTime class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Service Type</p>
            <div class="input-box">
              <input placeholder='Service' type="text" />
              <FaChevronDown class="input-icon" /> 
            </div>
          </div>

        </div>



        <div class="input-cont-box">

          <div class="input-slot">
            <p class="label">Phone Number</p>
            <div class="input-box">
              <input placeholder='Mobile' type="text" />
              <FiPhone class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Date</p>
            <div class="input-box">
              <input placeholder='Pick a date' type="date" />
              <HiOutlineCalendarDateRange class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">End Time</p>
            <div class="input-box">
              <input placeholder='Pick a Time' type="time" />
              <MdAccessTime class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Guests</p>
            <div class="input-box">
              <input placeholder='full name' type="text" />
              <BsIncognito class="input-icon" /> 
            </div>
          </div>

        </div>
      </main>
    </section>

    <main class="package-sec">


      <div class="package-box">
        <div class="pack-img"></div>
        <div class="pack-text-para">
          <p>Service Package 01</p>
          <h3>NGN #50,000</h3>
        </div>
      </div>

      <div class="package-box">
        <div class="pack-img"></div>
        <div class="pack-text-para">
          <p>Service Package 02</p>
          <h3>NGN #80,000</h3>
        </div>
      </div>

      <div class="package-box">
        <div class="pack-img"></div>
        <div class="pack-text-para">
          <p>Service Package 03</p>
          <h3>NGN #120,000</h3>
        </div>
      </div>

      <div class="package-box">
        <div class="pack-img"></div>
        <div class="pack-text-para">
          <p>Service Package 04</p>
          <h3>NGN #200,000</h3>
        </div>
      </div>

    </main>


    <Footer/>
    </section>
  )
}

export default RequestPage