import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <Container className="text-center my-5">
      <h1>🎉 Thank You for Your Purchase!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">
        <Button variant="primary">Continue Shopping</Button>
      </Link>
    </Container>
  );
}

export default ThankYouPage;
