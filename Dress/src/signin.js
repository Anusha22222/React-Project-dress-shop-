import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link if you need to navigate to other pages

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend for authentication
    console.log('Sign-in attempt with:');
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Sign-in functionality is for demonstration. Check console for credentials.');
    // You might want to redirect the user after successful sign-in
    // navigate('/'); // Example: Redirect to home page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In to Outfit Aura</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign In
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="#">Forgot Password?</Link>
          </div>
          <div className="text-center mt-2">
            Don't have an account? <Link to="#">Sign Up</Link> {/* Link to a hypothetical sign-up page */}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignInPage;