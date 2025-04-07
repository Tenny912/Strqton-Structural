import { useEffect } from 'react';

function ScrollHandler({ setScrolled }) {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      // Header effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Add class to body when scrolled down to hide hero content
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled-down');
      } else {
        document.body.classList.remove('scrolled-down');
      }
      
      // Section fade-in animation
      const sections = document.querySelectorAll('.about-intro, .philosophy, .vision, .core-values, .services, .company-details, .contact-form, .comments-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load to check for elements in view
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  return null; // This component doesn't render anything
}

export default ScrollHandler; 