import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import RequestPage from './Pages/RequestPage';
import AdminDashboard from './Pages/AdminDashboard';
import PortfolioPage from './Pages/PortfolioPage';
import SocialMediaMarketing from './ServicesPage/SocialMediaMarketing';
import WebDevelopment from './ServicesPage/WebDevelopment';
import BrandStrategy from './ServicesPage/BrandStrategy';
import ContentMarketing from './ServicesPage/ContentMarketing';
import Training from './ServicesPage/Training';
import CommunityManagement from './ServicesPage/CommunityManagement';
import EventPage from './Pages/EventPage';
import EventDetails from './Pages/EventDetails';


const App = () => {
  return (
    <section>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/admindashbord" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminDashboard />} />
          <Route path="/socialmediamarketing" element={<SocialMediaMarketing />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/brandstrategy" element={<BrandStrategy />} />
          <Route path="/contentmarketing" element={<ContentMarketing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/communitymanagement" element={<CommunityManagement />} />
          <Route path="/Event" element={<EventPage/>} />
          <Route path="/EventDetails" element={<EventDetails/>} />
         
        </Routes>
      </BrowserRouter>

    </section>
  )
}

export default App