import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Outfit Aura</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#shopnow">Shop Now</Nav.Link>
            <Nav.Link href="#testinomials">Testinomials</Nav.Link>
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#fashion">Fashion Tips</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br /><br />
    </>
  );
}

export default ColorSchemesExample;

