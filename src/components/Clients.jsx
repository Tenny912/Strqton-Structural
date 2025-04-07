import React, { useEffect, useState } from 'react';
import zpcLogo from '../assets/ZPC.png';
import unicefLogo from '../assets/UNICEF.png';
import bancAbcLogo from '../assets/BANC ABC.png';
import '../styles/Clients.css';

function Clients() {
  const [logos, setLogos] = useState([]);
  
  // Set up logos for infinite slideshow by duplicating them
  useEffect(() => {
    const originalLogos = [
      {
        id: 1,
        img: zpcLogo,
        name: "Zimbabwe Power Company",
        category: "Infrastructure & Energy Sector"
      },
      {
        id: 2,
        img: unicefLogo,
        name: "UNICEF",
        category: "International Development"
      },
      {
        id: 3,
        img: bancAbcLogo,
        name: "BANC ABC",
        category: "Financial Sector"
      }
    ];
    
    // Duplicate logos to create continuous scrolling effect
    setLogos([...originalLogos, ...originalLogos]);
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-heading">
          <h2>Our Trusted Clients</h2>
        </div>
        <p className="clients-intro">
          We are proud to have collaborated with leading organizations across various sectors. 
          Our diverse portfolio of clients reflects our commitment to excellence and our ability 
          to deliver exceptional results regardless of project scale or complexity.
        </p>
        
        <div className="client-logos">
          <div className="client-logos-container">
            {logos.map((client, index) => (
              <div className="client-logo" key={`${client.id}-${index}`}>
                <img src={client.img} alt={client.name} />
                <div className="client-overlay">
                  <h3>{client.name}</h3>
                  <p>{client.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="client-testimonial">
          <blockquote>
            "Struqton Structural delivered exceptional quality on our project. Their expertise, 
            professionalism, and commitment to excellence made them the ideal partner for our 
            construction needs."
          </blockquote>
          <cite>— Major Client</cite>
        </div>
      </div>
    </section>
  );
}

export default Clients; 