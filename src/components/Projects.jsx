import React, { useState, useEffect, useRef } from 'react';
import struct1Image from '../assets/struct 1.png';
import struct2Image from '../assets/struct 2.png';
import struct3Image from '../assets/struct 3.png';
import '../styles/Projects.css';

function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const projectsGridRef = useRef(null);

  // Autoplay slideshow
  useEffect(() => {
    if (isPaused) return; // Don't run autoplay if paused
    
    const autoplayInterval = setInterval(() => {
      if (projectsGridRef.current) {
        const totalCards = projectsGridRef.current.children.length;
        const nextSlide = (activeSlide + 1) % totalCards; // Loop back to first slide after last
        
        const cardWidth = 370; // card width + margin
        const scrollAmount = nextSlide * cardWidth;
        
        projectsGridRef.current.scrollTo({ 
          left: scrollAmount, 
          behavior: 'smooth' 
        });
        
        setActiveSlide(nextSlide);
      }
    }, 1000); // Move every 1 second

    // Clear interval on unmount or when activeSlide changes
    return () => clearInterval(autoplayInterval);
  }, [activeSlide, isPaused]);

  // Slideshow navigation
  const slideLeft = () => {
    if (projectsGridRef.current) {
      const cardWidth = 370; // card width + margin
      const scrollAmount = activeSlide > 0 ? (activeSlide - 1) * cardWidth : 0;
      projectsGridRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveSlide(prev => Math.max(0, prev - 1));
    }
  };

  const slideRight = () => {
    if (projectsGridRef.current) {
      const totalCards = projectsGridRef.current.children.length;
      const cardWidth = 370; // card width + margin
      if (activeSlide < totalCards - 1) {
        const scrollAmount = (activeSlide + 1) * cardWidth;
        projectsGridRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setActiveSlide(prev => Math.min(totalCards - 1, prev + 1));
      }
    }
  };

  const goToSlide = (index) => {
    if (projectsGridRef.current) {
      const cardWidth = 370; // card width + margin
      const scrollAmount = index * cardWidth;
      projectsGridRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveSlide(index);
    }
  };

  // Handle scroll events on the projects grid
  const handleProjectsScroll = () => {
    if (projectsGridRef.current) {
      const scrollLeft = projectsGridRef.current.scrollLeft;
      const cardWidth = 370; // card width + margin
      const newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  // Handle mouse events to pause/resume autoplay
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Function to get the appropriate project image based on index
  const getProjectImage = (index) => {
    // Rotate between the 3 struct images
    const imageIndex = (index % 3) + 1;
    
    switch(imageIndex) {
      case 1:
        return struct1Image;
      case 2:
        return struct2Image;
      case 3:
        return struct3Image;
      default:
        return struct1Image;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>Our Projects</h2>
        </div>
        <p className="projects-intro">
          Explore our portfolio of successful construction and engineering projects. With a proven track record of excellence, 
          we've delivered premium solutions across residential, commercial, industrial, and infrastructure sectors.
        </p>
        
        <div 
          className={`projects-grid ${isPaused ? 'paused' : ''}`}
          ref={projectsGridRef} 
          onScroll={handleProjectsScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(0)} alt="Glytime Warehouse Construction" />
            </div>
            <div className="project-info">
              <h3>Glytime Warehouse Construction</h3>
              <p><strong>Client:</strong> GLYTIME FOODS</p>
              <p><strong>Estimated Cost:</strong> USD 3.2 million</p>
              <p><strong>Status:</strong> Ongoing Project</p>
              <p><strong>Size:</strong> 3313 sq.m</p>
              <p><strong>Involvement:</strong> Design, Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(1)} alt="Aquabridge Warehouse Construction" />
            </div>
            <div className="project-info">
              <h3>Aquabridge Warehouse Construction</h3>
              <p><strong>Client:</strong> Mr H. Chitate</p>
              <p><strong>Estimated Cost:</strong> USD 800K</p>
              <p><strong>Size:</strong> 48 x 24m</p>
              <p><strong>Involvement:</strong> Design, Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(2)} alt="Slowgrad Sandton Factory Building" />
            </div>
            <div className="project-info">
              <h3>Slowgrad Sandton Factory Building</h3>
              <p><strong>Client:</strong> SLOWGRAD SANDTON</p>
              <p><strong>Estimated Cost:</strong> USD 2.5 million</p>
              <p><strong>Size:</strong> 48 x 24m</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Design, Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(3)} alt="Building and Pavement Construction" />
            </div>
            <div className="project-info">
              <h3>Building and Pavement Construction</h3>
              <p><strong>Client:</strong> TRADE CENTER</p>
              <p><strong>Estimated Cost:</strong> USD 4.5 million</p>
              <p><strong>Timeline:</strong> April 2021 – December 2021</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Design, Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(4)} alt="Civil works for a Movable Crane" />
            </div>
            <div className="project-info">
              <h3>Civil works for a Movable Crane</h3>
              <p><strong>Client:</strong> VALUE ENGINEERING</p>
              <p><strong>Timeline:</strong> April 2024 – April 2024</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Design, Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(5)} alt="Refurbishment of a Shed" />
            </div>
            <div className="project-info">
              <h3>Refurbishment of a Shed</h3>
              <p><strong>Client:</strong> GLOBAL PLATINUM RESOURCES</p>
              <p><strong>Estimated Cost:</strong> USD 104K</p>
              <p><strong>Size:</strong> 157 sq.m</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Refurbishment, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(6)} alt="3.3km Water Pipeline Construction" />
            </div>
            <div className="project-info">
              <h3>3.3km Water Pipeline Construction</h3>
              <p><strong>Client:</strong> Plumtree Town Council</p>
              <p><strong>Project Period:</strong> Feb 2022 - March 2022</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Design optimization, Excavations, Pipe laying, Pipeline testing</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(7)} alt="Banc ABC Housing Development" />
            </div>
            <div className="project-info">
              <h3>Banc ABC Housing Development</h3>
              <p><strong>Client:</strong> Banc ABC</p>
              <p><strong>Project Period:</strong> July 2021- December 2022</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Drain excavation, Drain lining, Culverts construction</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(8)} alt="Roadside Drainage & Palisade Fencing" />
            </div>
            <div className="project-info">
              <h3>Roadside Drainage & Palisade Fencing</h3>
              <p><strong>Client:</strong> BINDURA TOWN COUNCIL</p>
              <p><strong>Estimated Cost:</strong> USD 104K</p>
              <p><strong>Size:</strong> 5 ha</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Involvement:</strong> Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(9)} alt="Africa University Solar Project" />
            </div>
            <div className="project-info">
              <h3>Africa University Solar Project</h3>
              <p><strong>Client:</strong> AFRICA UNIVERSITY</p>
              <p><strong>Size:</strong> 100KW</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Timeline:</strong> 2019 - 2020</p>
              <p><strong>Involvement:</strong> Civil works subcontractor, and foundation structural designs</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(10)} alt="Urgent Water Supply & Sanitation" />
            </div>
            <div className="project-info">
              <h3>Urgent Water Supply & Sanitation</h3>
              <p><strong>Client:</strong> CROWNS AGENTS LIMITED</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Timeline:</strong> March 2019 – Dec 2019</p>
              <p><strong>Involvement:</strong> Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(11)} alt="Crop Institute Irrigation Rehabilitation" />
            </div>
            <div className="project-info">
              <h3>Crop Institute Irrigation Rehabilitation</h3>
              <p><strong>Client:</strong> MINISTRY OF AGRICULTURE</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Timeline:</strong> Sep 2019 – Dec 2019</p>
              <p><strong>Involvement:</strong> Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(12)} alt="Old Mutual Solar Project" />
            </div>
            <div className="project-info">
              <h3>Old Mutual Solar Project</h3>
              <p><strong>Client:</strong> OLD MUTUAL</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Size:</strong> 750KW</p>
              <p><strong>Estimated Cost:</strong> USD 2.5 million</p>
              <p><strong>Timeline:</strong> Oct 2020 – Feb 2021</p>
              <p><strong>Involvement:</strong> Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(13)} alt="8 Family Duplexes Flat" />
            </div>
            <div className="project-info">
              <h3>8 Family Duplexes Flat</h3>
              <p><strong>Client:</strong> ZIMBABWE POWER COMPANY</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Estimated Cost:</strong> USD 667K</p>
              <p><strong>Timeline:</strong> Oct 2014 – Dec 2016</p>
              <p><strong>Involvement:</strong> Construction, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(14)} alt="Civil & Structural Engineering Services" />
            </div>
            <div className="project-info">
              <h3>Civil & Structural Engineering Services</h3>
              <p><strong>Client:</strong> ADVENTIST UNIVERSITY OF MOZAMBIQUE</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Estimated Cost:</strong> USD 300K</p>
              <p><strong>Timeline:</strong> March 2019 – 2022</p>
              <p><strong>Involvement:</strong> Consultancy, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(15)} alt="Civil & Structural Engineering Services" />
            </div>
            <div className="project-info">
              <h3>Civil & Structural Engineering Services</h3>
              <p><strong>Client:</strong> GRAIN MARKETING BOARD</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Estimated Cost:</strong> USD 600K</p>
              <p><strong>Timeline:</strong> Feb 2018 – July 2018</p>
              <p><strong>Involvement:</strong> Consultancy, and Supervision</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={getProjectImage(16)} alt="United Methodist Construction Project" />
            </div>
            <div className="project-info">
              <h3>United Methodist Construction Project</h3>
              <p><strong>Client:</strong> UNITED METHODIST - MUTARE</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Estimated Cost:</strong> USD 3 million</p>
              <p><strong>Involvement:</strong> Consultancy, Construction and Project Management</p>
            </div>
          </div>
        </div>

        <div className="slideshow-controls">
          <button 
            className="slide-btn slide-left" 
            onClick={slideLeft} 
            aria-label="Previous project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
          <button 
            className="slide-btn slide-right" 
            onClick={slideRight} 
            aria-label="Next project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </div>

        <div className="slide-indicators">
          {Array.from({ length: 17 }).map((_, index) => (
            <div 
              key={index}
              className={`slide-indicator ${activeSlide === index ? 'active' : ''}`}
              onClick={() => {
                goToSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label={`Go to project ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 