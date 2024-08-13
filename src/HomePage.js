import React from 'react';
import './HomePage.css';
import coursecraftsrchome from './coursecraftsrchome.png';

const Homepage = () => {
  return (
    <div className="homepage-container">
      
        <img src={coursecraftsrchome} alt="Home" className="home-image" />
      
      <div className="content-container">
        <div className="hero-section">
          <h1 className="company-name">CourseCraft</h1>
          <p className="slogan">Empowering Your Future, One Course at a Time</p>
        </div>
        <div className="info-cards-container">
          <div className="info-cards">
            <div className="info-card">
              <h3>Our Vision</h3>
              <p>Our vision is to revolutionize education by creating a platform where learning is personalized, accessible, and tailored to individual career goals. We aim to bridge the gap between education and industry by offering courses designed to meet the needs of tomorrow's workforce.</p>
            </div>
            <div className="info-card">
              <h3>Our Mission</h3>
              <p>Our mission is to provide accessible, high-quality education to students everywhere, helping them achieve their career goals.</p>
            </div>
            <div className="info-card">
              <h3>Why Choose Us</h3>
              <p>We combine expert knowledge with interactive learning methods to ensure you get the most out of your educational experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
