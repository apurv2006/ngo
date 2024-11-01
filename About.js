import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Welcome to Our NGO! We are dedicated to making a positive impact in our community through various initiatives in education, healthcare, and social welfare. Our mission is to support and empower underprivileged individuals by providing them with the resources and opportunities they need to thrive.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to improve the lives of those in need by addressing the root causes of poverty and inequality. We believe that every individual deserves a chance to reach their full potential, and we work tirelessly to make that a reality.</p>
      <h3>Our Vision</h3>
      <p>We envision a world where everyone has access to education, healthcare, and basic necessities. Through our efforts, we aim to create a more just and equitable society where all individuals can lead fulfilling lives.</p>
      <h3>What We Do</h3>
      <p>We undertake various projects and initiatives aimed at improving the lives of the underprivileged. These include providing educational support to children, healthcare services to those in need, and community development programs that foster self-sufficiency and resilience.</p>
      <h3>Meet Our NGOs</h3>
      <p>We collaborate with several NGOs to achieve our goals. Each of our partner organizations brings unique expertise and resources to our collective mission.</p>
      <Link to="/ngos" className="btn">Meet Our NGOs</Link>
    </div>
  );
}

export default About;
