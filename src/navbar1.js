// src/components/navbar1.js
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Outfit Aura</Navbar.Brand>
          <Nav className="me-auto d-flex flex-row gap-3">
            <Link className="nav-link text-light" to="/">Home</Link>
            <Link className="nav-link text-light" to="/about">About</Link>
            <Link className="nav-link text-light" to="/shopnow">Shop Now</Link>
            <Link className="nav-link text-light" to="/gallery">Gallery</Link>
            <Link className="nav-link text-light" to="/testimonials">Testimonials</Link>
            <Link className="nav-link text-light" to="/mission">Mission</Link>
            <Link className="nav-link text-light" to="/fashion">Fashion Tips</Link>
            <Link className="nav-link text-light" to="/contact">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
      <br /><br />
    </>
  );
}
