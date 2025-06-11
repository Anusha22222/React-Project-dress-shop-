import React from "react";
import './dress.scss';
import Container from 'react-bootstrap/Container';
import ColorSchemesExample from "./navbar1";

export default function About() {
  return (
    <>
    <ColorSchemesExample/>
    <Container className="about-container text-center my-5">
      <h1><u><i>ABOUT</i></u></h1>
      <div className="about-text mx-auto mt-4 p-4">
        <p>
          At <strong>Outfit Aura</strong>, we believe that the right outfit doesn't just change how you look — it transforms how you feel.
          <br /><br />
          Our mission is to help every woman discover her unique aura through carefully curated pieces that inspire confidence, grace, and self-expression.
          <br /><br />
          Founded with a passion for style and a love for empowering women, Outfit Aura blends timeless elegance with modern trends.
          <br /><br />
          Whether you're searching for a statement dress for a special occasion or everyday pieces that reflect your personality, you'll find designs that are both flattering and unforgettable.
          <br /><br />
          Every item in our collection is selected with care, keeping quality, comfort, and style at the heart of what we do. We are not just about fashion — we are about finding the outfit that brings out your best self.
        </p>
      </div>
    </Container>
    </>
  );
}
