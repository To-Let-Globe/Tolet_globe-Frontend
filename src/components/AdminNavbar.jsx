import { Link } from "react-router-dom";
import Logo from "../assets/img/Favicon.png";
import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../style/navbar.css"
export const AdminNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
 
    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    return ( 
        <Navbar expand="lg" className="navbar-container">
            <div className="container-fluid">
                <Link to="/admin/blog" className="navbar-brand" >
                    <img src={Logo} alt="Logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/admin/postblog" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleNavLinkClick('home')}>
                            Post a Blog
                        </Nav.Link>
                        <Nav.Link as={Link} to="/admin/displayblog" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleNavLinkClick('home')}>
                           Blogs
                        </Nav.Link>
                      
                        <Nav.Link as={Link} to="/admin/property" className={`nav-link ${activeLink === 'service' ? 'active' : ''}`} onClick={() => handleNavLinkClick('service')}>
                          Property Listing
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};