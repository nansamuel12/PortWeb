import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navigation = () => {
    return (
      <nav className="navbar"> 
        <h1 className="portfoliolo00go">Portfolio</h1> 
        <ul className="menu"> 
          <li><NavLink to="/Home" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/About" className="nav-link">About</NavLink></li>
          <li><NavLink to="/Experience" className="nav-link">Experience</NavLink></li>
          <li><NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink></li>
          <li><NavLink to="/Testimonio" className="nav-link">Testimonio</NavLink></li>
          <li><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    );
  };

export default Navigation;