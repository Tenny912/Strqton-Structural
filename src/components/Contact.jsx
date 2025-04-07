import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>Contact Us</h2>
        </div>
        
        <div className="comments-section always-visible fade-in">
          <h3>Company Information</h3>
          <div className="comment-box">
            <div className="company-info">
              <p className="company-name">STRUQTON STRUCTURAL (PVT) LTD</p>
              <p className="company-address">Shop 120-123, Longcheng Plaza, Mutley Bend, Belvedere, Harare</p>
              <p className="company-email">
                <a href="mailto:info@struqtonstructural.com">info@struqtonstructural.com</a>
              </p>
              <p className="company-phone">
                <a href="tel:+263774751861">+263 774 751 861</a> / 
                <a href="tel:+263242711599">+263 242 711 599</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="company-details always-visible fade-in">
            <h3>STRUQTON STRUCTURAL (PVT) LTD</h3>
            <address>
              Shop 120-123, Longcheng Plaza, Mutley Bend, Belvedere, Harare
            </address>
            
            <div className="contact-methods">
              <p>
                <strong>Email:</strong> 
                <a href="mailto:info@struqtonstructural.com">info@struqtonstructural.com</a>
              </p>
              <p>
                <strong>Phone:</strong> 
                <a href="tel:+263774751861">+263 774 751 861</a> / 
                <a href="tel:+263242711599">+263 242 711 599</a>
              </p>
            </div>
          </div>
          
          <div className="contact-form always-visible fade-in">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 