import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../img/pomologo.png';

const NavHeader = () => {
  return (
    <Container fluid className="navcontainer">
      <Navbar className="navbarheader shadow" sticky="top" expand="xxl">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img className="App-logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Button
                style={{ background: "linear-gradient(to right, #FFFFFF, #f17171)", color: "white"}}
                
                href="#signup"
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavHeader;

{
  /* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown> */
}
