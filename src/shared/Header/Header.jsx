import React from 'react';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>TreatCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="blogs">Blogs</NavLink>
            <NavLink href="#pricing">About Us</NavLink>
            <NavLink href="#pricing">Contact</NavLink>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;