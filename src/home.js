import React from "react";
import './dress.scss';
import ColorSchemesExample from "./navbar1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';


export default function ContainerFluidExample() {
  return (
    <>
      <ColorSchemesExample />
      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: "#e6f0dc" }}>
            <br />
            <section id="home">
              <h2>Welcome to Outfit Aura</h2>
              <br />
              <p><i>Captures the glow or essence of the perfect outfit.</i></p>
              <br />
            </section>
          </Col>
        </Row>
      </Container>
      <br/><br/>
      <Carousel data-bs-theme="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src="https://www.shutterstock.com/image-photo/fashion-woman-red-fluttering-dress-600nw-2115344237.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 style={{ color: "white" }}>Gowns</h5>
      <p style={{ color: "white" }}>Elegant Gowns for Every Occasion</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src="https://5.imimg.com/data5/SELLER/Default/2023/7/330378240/LR/UB/KM/8647031/np-1312-maroon-aa-1000x1000.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 style={{ color: "white" }}>Western Wear</h5>
      <p style={{ color: "white" }}>Modern Western Vibes, Tailored for You</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src="https://cdn0.weddingwire.in/article/7671/3_2/1280/jpg/51767-lead-2-silk-saree-images-vivek-krishnan-photography-insta.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 style={{ color: "white" }}>Saree</h5>
      <p style={{ color: "white" }}>Grace in Every Drape</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    <br/>
    </>
  );
}
