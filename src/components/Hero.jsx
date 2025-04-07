import React from 'react';
import heroImage from '../assets/hero section.png';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Struqton Structural</h1>
        <p>Building the future, one structure at a time</p>
        <button className="cta-button">Get a Quote</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Struqton Structural Construction" />
      </div>
    </section>
  );
}

export default Hero; 