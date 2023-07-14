import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "./logo.png"

const NavBar = ({ userName }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="collapse navbar-collapse justify-content-end">
            <Nav.Link href="applications">Applications</Nav.Link>
            <Nav.Link href="catalog">Catalog</Nav.Link>
            <Nav.Link href="pipelines">Pipelines</Nav.Link>
            <Nav.Link href="lineage">Lineage</Nav.Link>
            <Nav.Link href="alerts">Alerts</Nav.Link>
          </Nav>
          <Nav>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  John Doe
                </a>
                <ul class="dropdown-menu" aria-labelledby="userDropdown">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
