import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './images/hero.png';
import logo from './images/logo.png';

function Home() {
  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <img src={logo} alt="NGO Logo" className="logo" />
        <h1>Welcome to Our NGO Finder</h1>
        <p>Connecting you with NGOs that matter.</p>
        <Link to="/about" className="btn">Learn More</Link>
      </div>

      <div className="highlights">
        <h2>How It Works</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Search by Cause</h3>
            <p>Enter keywords related to the cause you're passionate about (e.g., education, healthcare, environment).</p>
          </div>
          <div className="card">
            <h3>Browse by Location</h3>
            <p>Find NGOs operating in your area or in regions you're interested in.</p>
          </div>
          <div className="card">
            <h3>Filter by Sector</h3>
            <p>Narrow down your search by selecting specific sectors like child welfare, women empowerment, disaster relief, etc.</p>
          </div>
          <div className="card">
            <h3>Read NGO Profiles</h3>
            <p>Learn about the mission, vision, and impact of each NGO. View their projects, success stories, and how you can contribute.</p>
          </div>
        </div>
      </div>

      <div className="featured-ngos">
        <h2>Featured NGOs</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Education for All</h3>
            <p>Providing quality education to underprivileged children to help them achieve their dreams.</p>
          </div>
          <div className="card">
            <h3>Healthcare Heroes</h3>
            <p>Offering medical aid and health education to underserved communities.</p>
          </div>
          <div className="card">
            <h3>Green Earth Initiative</h3>
            <p>Promoting environmental conservation and sustainability.</p>
          </div>
        </div>
      </div>

      <div className="get-involved">
        <h2>Get Involved</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Volunteer</h3>
            <p>Join hands with NGOs and contribute your time and skills.</p>
          </div>
          <div className="card">
            <h3>Donate</h3>
            <p>Support NGOs financially to help them continue their impactful work.</p>
          </div>
          <div className="card">
            <h3>Partnerships</h3>
            <p>Collaborate with NGOs for corporate social responsibility (CSR) initiatives.</p>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to us at <a href="mailto:contact@yourngo.org">contact@yourngo.org</a> or call us at <a href="tel:+911234567890">+91-1234-567-890</a>.</p>
      </div>
    </div>
  );
}

export default Home;
