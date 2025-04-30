import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import RequestPage from './Pages/RequestPage';
import SocialMediaMarketing from './ServicesPage/SocialMediaMarketing';
import WebDevelopment from './ServicesPage/WebDevelopment';
import BrandStrategy from './ServicesPage/BrandStrategy';
import ContentMarketing from './ServicesPage/ContentMarketing';


const App = () => {
  return (
    <section>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/each-service" element={<EachServicePage />} />
        </Routes>
      </BrowserRouter>

    </section>
  )
}

export default App