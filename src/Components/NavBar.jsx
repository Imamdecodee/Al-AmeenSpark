import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Logo from "../assets/Images/Al-Ameen-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md";

const NavBar = () => {

  const [mobileNav, setMobileNav] = useState(false);
    const openMobileNav = () => {
      setMobileNav(!mobileNav)
    };

  return (
    <nav class="nav-bar">

        <main class="nav-content">
            <Link to="/">
              <img class="logo" src={Logo} alt="Logo" />
            </Link>

            <div class="nav-pages">
                <Link class="page-link" to="/">Home</Link>

                <Link class="page-link" to="/about">About</Link>

                <Link class="page-link" to="/service">Service</Link>

                <Link class="page-link" to="/contact">Contact</Link>
            </div>
            
            <div onClick={openMobileNav} class="toggle-icon-box">{ mobileNav ? 
        (< MdCancelPresentation class="toggle-icon-2"/>) : (<RxHamburgerMenu class="toggle-icon-1"/>) }</div>
      

      { mobileNav && <div class="side-bar-toggle"
      data-aos="fade-left"
      data-aos-duration="1000">
          <div class="nav-pages-toggle">
              <Link class="page-link-tgl" to="/">Home</Link>

              <Link class="page-link-tgl" to="/about">About</Link>

              <Link class="page-link-tgl" to="/service">Service</Link>

              <Link class="page-link-tgl" to="/contact">Contact</Link>
          </div>
        </div>}
      </main>
    </nav>
  )
}

export default NavBar