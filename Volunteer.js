import React from 'react';
import { Link } from 'react-router-dom';
// import Signup from './Signup';
function Volunteer() {
  return (
    <div className="volunteer">
      <h2>Volunteer with Us</h2>
      <p>Join hands with NGOs and contribute your time and skills to make a difference in our community. Here are some volunteer opportunities you can get involved in:</p>

      <div className="opportunity-cards">
        <div className="card">
          <h3>Teaching Assistance</h3>
          <p>Help provide quality education to underprivileged children by assisting in teaching activities.</p>
        </div>
        <div className="card">
          <h3>Healthcare Support</h3>
          <p>Support medical professionals in providing healthcare services to those in need.</p>
        </div>
        <div className="card">
          <h3>Community Development</h3>
          <p>Participate in community development projects aimed at improving living conditions and fostering self-sufficiency.</p>
        </div>
        <div className="card">
          <h3>Environmental Conservation</h3>
          <p>Engage in activities that promote environmental conservation and sustainability.</p>
        </div>
      </div>

      <div className="get-involved">
        <h2>How to Get Involved</h2>
        <p>Getting involved as a volunteer is simple:</p>
        <ul>
          <li>Browse through the volunteer opportunities listed above.</li>
          <li>Choose the opportunity that aligns with your interests and skills.</li>
          <li>Contact the NGO directly or fill out our volunteer form to express your interest.</li>
          <li>Attend an orientation session to get started on your volunteer journey.</li>
        </ul>
        <Link to="/signup" className="btn">Sign Up to Volunteer</Link>
      </div>
    </div>
  );
}
document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;
    
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  });
  

export default Volunteer;
