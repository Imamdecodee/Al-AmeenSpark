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
import Register from './Pages/register';
import Sidebar from './Components/Sidebar';
import { ThemeProvider } from './components/ThemeProvider';
import NewsPage from './Pages/NewsPage';
import BlogDetail from './Pages/BlogDetail';
import PublicLayout from './components/PublicLayout';
import { input } from 'framer-motion/client';
import { Card } from './Components/ui/card';


const App = () => {
  return (
    <section>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/admin/login" element={<AdminDashboard />} />
          <Route path="/socialmediamarketing" element={<SocialMediaMarketing />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/brandstrategy" element={<BrandStrategy />} />
          <Route path="/contentmarketing" element={<ContentMarketing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/communitymanagement" element={<CommunityManagement />} />
          <Route path="/Event" element={<EventPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/EventDetails" element={<EventDetails/>} />
         
        </Routes>
        <ThemeProvider defaultTheme="light" storageKey="marketing-ui-theme">
  
        <div className="App">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admindashbord" element={<AdminDashboard />} />
            
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id" element={<BlogDetail />} />
            </Route>
            
            {/* Redirect root to news page or admin login in a real app */}
            <Route path="/" element={<NewsPage />} />
          </Routes>
        </div>
      
    </ThemeProvider>
      </BrowserRouter>

    </section>
  )
}

export default App