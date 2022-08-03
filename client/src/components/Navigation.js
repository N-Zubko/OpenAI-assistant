import React from "react";
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";

function Navigation() {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="navbar">
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <NavbarBrand onClick={refreshPage}>Ask Open AI</NavbarBrand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/question">Question</Nav.Link>
              <Nav.Link href="/allResponses">All Responses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
