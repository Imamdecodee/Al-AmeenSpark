import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from "../assets/Images/Al-Ameen-logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";


const Footer = () => {
  return (
  <div className='Footer'>
    <div className='footer-up'>
      <div className='logo-side'>
        <img className='Logo-footer' src= {Logo} alt="" />
        <p className='Logo-footer-text'>
          ilm-Nexus Digital Skills is branch of ilm-nexus Comapany 
          Empowering Young People with Market-Ready Digital Skills 
          We Build ,

         </p>
         <div className='icon'>
           <Link to="https://www.facebook.com/share/1DXsaJPc1c/">  <FaFacebookSquare  class="page-link"/></Link>
           <Link to="https://www.facebook.com/share/1DXsaJPc1c/">    <FaTwitterSquare  class="page-link"/> </Link>
           <Link to="https://www.facebook.com/share/1DXsaJPc1c/">      <FaGoogle  class="page-link"/>    </Link>
           <Link to="https://www.facebook.com/share/1DXsaJPc1c/">    <FaInstagramSquare  class="page-link"/>  </Link>
           <Link to="https://www.facebook.com/share/1DXsaJPc1c/">      <FaLinkedin  class="page-link"/>   </Link>
         </div>
      </div>
      <div className='company-div'>
        <h1>Company</h1>
        <Link class="f-page-link" to="/">Home</Link>
        <Link class="f-page-link" to="/about">About</Link>
        <Link class="f-page-link" to="/service">Service</Link>
        <Link class="f-page-link" to="/contact">Contact</Link>
      </div>
      <div className='Bussiness-div'>
        <h1>Business</h1>
        <p>Project</p>
        <p>Our Team</p>
        <p>Facts</p>
        <p>Customers</p>
      </div>

      <div className='Get-in-touch-div'>
        <h1>Get In Touch</h1>
        <div className='git-info'>
          <FaHome /> 
          <p>Rt,88 ilorin Kwara state</p>
         </div>
         <div className='git-info'>
          <MdEmail /> 
          <p>infor@example.cpm</p>
         </div>
         <div className='git-info'>
          <FaPhoneVolume />
          <p>+234 917-957-855</p>
         </div>
         <div className='git-info'>
           <MdPhoneIphone />
          <p>+234 9047-957-855</p>
         </div>
      
       
      </div>

      <div className='company-div'>
        <h1>Legal Policies</h1>
        <Link class="f-page-link" to="https://docs.google.com/document/d/1nKpxjvpXlHF7SUbRenUYsO6WIqrDZAynkZZ1oPCc1xE/edit?usp=drivesdk">Terms of service</Link>
        <Link class="f-page-link" to="https://docs.google.com/document/d/1xx77cXwW0_lK9m419PRzGmGT6zm0ixQ3BQ_CjzKxM48/edit?usp=drivesdk">Privacy policy</Link>
        <Link class="f-page-link" to="https://docs.google.com/document/d/1ceblBfpRwGjYDCV_MK-DDKvf7Ov07TuoQAQAF-3wmaE/edit?usp=drivesdk">Copy Right Policy</Link>
        <Link class="f-page-link" to="https://docs.google.com/document/d/1pcx3kfQyiDqvkxHgkeha8zdeIALCBr0Xb9j_wlFtc-o/edit?usp=drivesdk">Refund policy</Link>
        <Link class="f-page-link" to="https://docs.google.com/document/d/1UGgdEo5EB3sdV4pqf6tAP9Q-HxloaslPmWpL5wp_7AY/edit?usp=drivesdk">Cookie Policy</Link>
      </div>
    </div>
    <div className='copyright'>
      <hr class="f-line"/>
      <p> Copyright @ 2025 ILM NEXUS | Powered by Ilm Nexus Digital Skills</p>
    </div>
    </div>
   
  )
}

export default Footer