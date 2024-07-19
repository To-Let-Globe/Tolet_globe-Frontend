import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/property-listing">Property Listing</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
