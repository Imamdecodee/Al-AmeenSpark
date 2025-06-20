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

      const [fullname, setName] = React.useState("");
      const [email, setEmail] = React.useState("");
      const [time, setTime] = React.useState("");
      const [service, setService] = React.useState("");
      const [mobile, setMobile] = React.useState("");
      const [date, setDate] = React.useState("");
      const [endtime, setendtime] = React.useState("");
      const [description, setdescription] = React.useState("");
      const [guest, setguest] = React.useState("");
      const [sub, setSub] = React.useState("Submit");
      console.log(sub);
      
      function handleValueChange(e){
        setName(e.target.value);    
      }
    
      function handleEmailChange(e){
        setEmail(e.target.value);    
      }
    
      function handleTimeChange(e){
        setTime (e.target.value); 
      }
      function handleServiceChange(e){
        setService(e.target.value);    
      }
      function handleMobileChange(e){
        setMobile(e.target.value);    
      }
      function handledateChange(e){
        setDate(e.target.value);    
      }
      function handleendtimeChange(e){
        setendtime(e.target.value);    
      }
      function handleguestChange(e){
        setguest(e.target.value);    
      }
      function handledescriptionChange(e){
        setdescription(e.target.value);    
      }


      function handleSubmit(){
        
        const body = {
          fullname,
          email,
          time,
          service,
          mobile,
          date,
          endtime,
          description
        };

        const options = {
          headers: {
            "Content-Type"  : "application/json"
          },
          body: JSON.stringify(body),
          method:"post"
        };

        fetch("http://alameen-spark.com/reserve.php", options);
      }

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
   <form action="http://alameen-spark.com/reserve.php" method="post">
    <section class="reserve-sec">
      <main class="res-cont">

        <div class="input-cont-box">

          <div class="input-slot">
            <p class="label">Your Name</p>
            <div class="input-box">
              <input placeholder='full name' type="text"  value={fullname} name='fullname' onChange={(e)=>{
                  handleValueChange(e);
                }} />
              <MdOutlineTypeSpecimen class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Email Address</p>
            <div class="input-box">
              <input placeholder='Enter Email ID' type="email"  value={email} name='email' onChange={(e)=>{
                  handleEmailChange(e);
                }}/>
              <MdOutlineEmail class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Start Time</p>
            <div class="input-box">
              <input placeholder='Pick a Time' type="time"  value={time} name='time' onChange={(e)=>{
                  handleTimeChange(e);
                }} />
              <MdAccessTime class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Service Type</p>
            <div class="input-box">
              <input placeholder='Service' type="text"   value={service} name='service' onChange={(e)=>{
                  handleServiceChange(e);
                }}/>
              <FaChevronDown class="input-icon" /> 
            </div>
          </div>

        </div>



        <div class="input-cont-box">

          <div class="input-slot">
            <p class="label">Phone Number</p>
            <div class="input-box">
              <input placeholder='Mobile' type="text"   value={mobile} name='mobile' onChange={(e)=>{
                  handleMobileChange(e);
                }} />
              <FiPhone class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Date</p>
            <div class="input-box">
              <input placeholder='Pick a date' type="date"    value={date} name='date' onChange={(e)=>{
                  handledateChange(e);
                }} />
              <HiOutlineCalendarDateRange class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">End Time</p>
            <div class="input-box">
              <input placeholder='Pick a Time' type="time"   value={endtime} name='endtime' onChange={(e)=>{
                  handleendTimeChange(e);
                }}  />
              <MdAccessTime class="input-icon" /> 
            </div>
          </div>

          <div class="input-slot">
            <p class="label">Guests</p>
            <div class="input-box">
              <input placeholder='full name' type="text"   value={guest} name='guest' onChange={(e)=>{
                  handleguestChange(e);
                }} />
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

     

    </main>

    <div class="description-slot">
            <h1 >Description</h1>
            <div >
              <textarea class="description-box" type="message" placeholder='type here___'  value={description} name='description' onChange={(e)=>{
                  handledescriptionChange(e);
                }}  />
            </div>
     </div>
     <button className='book-btn' type="submit" onClick={handleSubmit} > Book Your Service Now </button>
     </form>
     
    <Footer/>
    </section>
  )
}

export default RequestPage