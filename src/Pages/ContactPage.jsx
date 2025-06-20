import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import '../Pages/ContactPage.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sub, setSub] = React.useState("Submit");
  console.log(sub);
  
  function handleValueChange(e){
    setName(e.target.value);    
  }

  function handleEmailChange(e){
    setEmail(e.target.value);    
  }

  function handleMessageChange(e){
    setMessage(e.target.value);
  }
  return (
    <section>
      <NavBar />
      <main>

        <div class="header">

          <div class="hero-cont-contact" data-aos="fade-up" data-aos-duration="3000">
            <h1 class="contact">Contact Us</h1>
            <h5 class="c-slogan">Contact for Premium Business Services .</h5>
            <p class="para-note">
             Ready to take your brand to the next level? Our team is here to deliver top-tier digital
             marketing services tailored to your needs. Get in touch with us today for personalized 
             support, strategic insights, and results that speak for themselves.
            </p>
            <Link to="/request"> 
             <button class="request-btn-hero">Request Service</button>
            </Link>
          </div>
        </div>
    </main>
         
        <div className='contact-hero'>
                
        <div class="strategy-cont">

          <h1>Book A Strategy Call</h1>
          <div className='map-message'>

            
              <form action="http://alameen-spark.com/reserve.php" method="post">
                <div className='message'>
                <input type="text"placeholder='Your Name:' value={name} name='name' onChange={(e)=>{
                  handleValueChange(e);
                }}/>
                <input type="email"placeholder='Your Email:' value={email} name="email" onChange={(e)=>{
                  handleEmailChange(e);
                }}/>
                <input  type="message"placeholder='Your Message:' name="message" value={message} onChange={(e)=>{
                  handleMessageChange(e);
                }} />
                <input type="hidden" value={true} name='contact_submit' />
                <button className='submit-btn' type="submit" > Submit </button>
                </div>
              </form>
              
            

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