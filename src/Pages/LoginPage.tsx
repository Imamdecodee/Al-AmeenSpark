import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaInstagram, FaTwitter, FaEnvelope, FaLock, FaWhatsapp } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ADMIN_EMAILS = [
    'theilmnexus@gmail.com',
    'muhammadbada04@gmail.com'
  ];
  const ADMIN_PASSWORD = 'Al-ameen.adminsparkles';
  const ADMIN_WHATSAPP = '09161699509';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (ADMIN_EMAILS.includes(email.toLowerCase()) && password === ADMIN_PASSWORD) {
        // Successful login for admin
        navigate('/admindashbord'); // Redirect to admin dashboard
      } else {
        // Invalid credentials
        setError(`Invalid email or password. Please contact admin via WhatsApp at ${ADMIN_WHATSAPP} to request access.`);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* Left Side - Branding */}
      <div className="login-left">
        <div className="logo">
          <img 
            src="/logo-al-ammen-spark-white.png" 
            alt="Al-Ammen Spark Logo" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x50?text=Al-Ammen+Spark';
            }}
          />
        </div>
        <div className="welcome-text">
          <h1>Welcome Back</h1>
          <p>
            Access your Al-Ammen Spark account to manage your services, 
            view analytics, and control your energy solutions.
          </p>
        </div>
        <div className="branding-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-form">
          <div className="form-header">
            <h2>Sign In</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          {error && (
            <div className="error-message">
              <FaWhatsapp className="whatsapp-icon" />
              <p>{error}</p>
              <a 
                href={`https://wa.me/${ADMIN_WHATSAPP}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                Contact Admin Now
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="remember-forgot">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Divider */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* Social Login Options */}
            <div className="social-login">
              <button type="button" className="social-icon">
                <FaGoogle />
              </button>
              <button type="button" className="social-icon">
                <FaInstagram />
              </button>
              <button type="button" className="social-icon">
                <FaTwitter />
              </button>
            </div>

            {/* Registration Link */}
            <div className="register-link">
              Don't have an account? <a href="/register">Register here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;