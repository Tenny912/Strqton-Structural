import React from 'react';
import '../styles/Map.css';

function Map() {
  return (
    <section id="location" className="map-section">
      <div className="container">
        <div className="section-heading">
          <h2>Our Location</h2>
        </div>
        <p className="map-intro">
          Visit us at our headquarters in Harare. Our team is ready to discuss your construction needs and provide tailored solutions for your projects.
        </p>
        
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed/v1/place?q=Harare,+Zimbabwe&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Struqton Structural Location"
            className="google-map"
          ></iframe>
        </div>
        
        <div className="address-container">
          <div className="address-card">
            <h3>Struqton Structural HQ</h3>
            <address>
              123 Construction Avenue<br />
              Harare, Zimbabwe
            </address>
            <div className="contact-details">
              <p><strong>Phone:</strong> +263 123 456 789</p>
              <p><strong>Email:</strong> info@struqtonstructural.com</p>
              <p><strong>Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map; 