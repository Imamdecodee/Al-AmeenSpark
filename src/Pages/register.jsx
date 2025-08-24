import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="company-title">Digital Excellence Starts Here</h1>
        <p className="company-tagline">Ignite Your Brand's Digital Potential</p>
        <p className="company-desc">
          Al-Ameen Spark delivers cutting-edge digital marketing solutions that
          drive measurable growth and establish market dominance for your brand.
        </p>

        <form
          className="register-form"
          action="mailto:theilmnexus@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullname" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="form-group">
            <label>Company Name (Optional)</label>
            <input type="text" name="company" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required />
          </div>

          <div className="form-group">
            <label>How did you hear about us?</label>
            <select name="referral">
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="google">Google Search</option>
              <option value="other">Others</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
