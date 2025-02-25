import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Naavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="navbar"
      style={{
        backgroundColor: "white",
        padding: "10px 15px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="logo-container">
          <img src="/Logos.png" alt="Logo" className="nav-logo" />
          <span className="brand-name">SYNAPTEK INFOTECH</span>
        </Navbar.Brand>

   

        <Navbar.Collapse id="navbar-nav">
          <Nav className="nav-links" onClick={() => setExpanded(false)} style={{paddingLeft:"50%"}}>
            <Nav.Link as={Link} to="/" className="nav-item">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naavbar;
