import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/projects">Projects</Link></li> */}
        <li><Link to="/donation">Donate</Link></li>
        <li><Link to="/ngos">NGOs</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/admin">Admin</Link></li> {/* Added link */}
      </ul>
    </nav>
  );
}

export default NavBar;
