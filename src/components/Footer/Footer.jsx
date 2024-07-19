// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/img/logo.png';
import {FaPhone, FaEnvelope, FaHome, FaInstagram, FaFacebook} from 'react-icons/fa'
import twitter from '../../assets/img/twitter.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h4 className='heading reach'>Reach Us</h4>
                    <div>
                        <FaPhone size={20} className='inverted-icon'/>
                        <p>+91-8707277347</p>
                    </div>
                    <div>
                        <FaEnvelope size={22} className='env-icon'/>
                        <p>hello@toletglobe.in</p>
                    </div>
                    <div> 
                        <FaHome size={60} className='home'/>
                        <p>D1/122 vipul khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
                    </div> 
                </div>
                <div className="quick-links">
                    <h4 className='heading'>Quick Links</h4>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Blogs</p>
                    <p>Projects</p>
                </div>
                <div className="services">
                    <h4 className='heading'>Services</h4>
                    <p>Paying guest</p>
                    <p>Flat and Houses</p>
                    <p>Offices</p>
                    <p>Shops and Godown</p>
                </div>
                <div className="company">
                    <img src={logo} alt="" />
                    <p>One-Stop solution for all your
                    brokerage free rental needs</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 To-Let Globe -- Lucknow</p>
                <div className="social-icons">
                    <FaInstagram size={30}/>
                    <FaFacebook size={30}/>
                    <img src={twitter}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
