import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Logo from "../assets/Images/Al-Ameen-logo.png";

const NavBar = () => {
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
            
            <button class="request-btn">Request Quote</button>
        </main>
    </nav>
  )
}

export default NavBar