import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="about-intro">
          <div className="section-heading">
            <h2>About Us</h2>
          </div>
          <p>
            Teamed up to venture further into Construction, combining our experience to give the clients well managed and reliable Professional
            Construction services. STRUQTON STRUCTURAL (PVT) LTD has different divisions that carry out various works in Design,
            Fabrication, Construction and Project Management Services. We anticipate a steady growth of the company based on quality service
            and satisfied Clientele. We are dedicated to maintain, improve and extend our services nationwide and to the Region.
          </p>
        </div>

        <div className="philosophy">
          <h3>Our Philosophy</h3>
          <p>Our mission is to design, build and deliver innovatively Structured and competitively priced projects</p>
        </div>

        <div className="vision">
          <h3>Our Vision</h3>
          <p>To become a preferred world class Construction Company.</p>
        </div>

        <div className="core-values">
          <h3>Our Core Values</h3>
          <ul>
            <li>Professionalism</li>
            <li>Efficiency</li>
            <li>Timeliness</li>
            <li>Transparency</li>
            <li>Integrity</li>
          </ul>
        </div>

        <div className="services">
          <div className="section-heading">
            <h2>Our Services</h2>
          </div>
          <p>
            We provide RESIDENTIAL, INDUSTRIAL, AGRICULTURAL & COMMERCIAL construction services as a main contractor or sub-
            contractor. Building Services include:
          </p>

          <div className="service-cards">
            <div className="service-card">
              <h3>BUILDING CONSTRUCTION</h3>
              <ul>
                <li>Civil And Structural Engineering Works</li>
                <li>Concrete works</li>
                <li>Bricklaying</li>
                <li>Carpentry & Joinery</li>
                <li>Electrical Installation</li>
                <li>Operations and Maintenance Services</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>BUILT ENVIRONMENT CONSULTING</h3>
              <p>
                With a network of construction professionals, STRUQTON
                STRUCTURAL has the engineering and construction experience to
                provide cost-effective solutions to everyday challenges that are faced by
                owners, contractors, engineers and architects. We have within our
                network and team the following built environment consultants: Project
                & Construction Managers; Architects; Civil & Structural Engineers;
                Electrical & Mechanical Engineers; & Quantity Surveyors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 