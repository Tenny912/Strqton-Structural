import React from 'react';
import managerImage from '../assets/manager.png';
import '../styles/Management.css';

function Management() {
  return (
    <section id="management" className="management-section">
      <div className="container">
        <div className="section-heading">
          <h2>Our Management Team</h2>
        </div>
        <p className="management-intro">
          Meet the experienced professionals leading Struqton Structural. Our management team combines decades of expertise 
          in construction, engineering, and project management to deliver outstanding results for our clients.
        </p>
        
        <div className="management-team">
          <div className="team-member">
            <div className="member-image">
              <img src={managerImage} alt="Patrick T. Gune" />
            </div>
            <div className="member-info">
              <h3>Patrick T. Gune</h3>
              <p className="position">Managing Director</p>
              <p className="bio">
                With extensive experience in structural engineering and construction management, 
                Patrick leads our team with vision and expertise. His commitment to excellence and 
                innovative approach have been instrumental in establishing Struqton Structural as 
                a leader in the construction industry.
              </p>
            </div>
          </div>
          
          {/* Additional team members can be added here in the future */}
        </div>
      </div>
    </section>
  );
}

export default Management; 