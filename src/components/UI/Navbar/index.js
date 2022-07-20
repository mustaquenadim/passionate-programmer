import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UiNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Passionate Programmer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/">
              Questions
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Mustaque Nadim
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <Button>Sign In</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <Button variant="success">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
