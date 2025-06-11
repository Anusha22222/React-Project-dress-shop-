import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {HomePageContent } from './task1';
import CartPage from './cardpage'; 
import SignInPage from './signin';
import PaymentPage from './payment';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import Gown  from './details';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1, name: product.title || product.name }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

const updateQuantity = (id, newQty) => {
  if (newQty < 1) return;
  setCart(prevItems =>
    prevItems.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    )
  );
};


  return (
    <>
    <Router>
      <Navbar bg= "#6f4e37"variant="dark" expand="lg" className="sticky-top" style={{backgroundColor:"#6f4e37"}}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{color:"white"}}>Outfit Aura</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#about" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#gallery" style={{color:"white"}}>Gallery</Nav.Link>
            <Nav.Link href="#shopnow" style={{color:"white"}}>Shop Now</Nav.Link>
            <Nav.Link href="#mission" style={{color:"white"}}>Mission</Nav.Link>
            <Nav.Link href="#fashion" style={{color:"white"}}>Fashion Tips</Nav.Link> 
            <Nav.Link href="#contact" style={{color:"white"}}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center text-info" style={{color:"white"}}><FaShoppingCart size={20} />
                <span className="ms-1">({cart.length})</span>
            </Nav.Link>
            </Nav>
            <span className="ms-1"></span>
            <Nav>
            <Nav.Link as={Link} to="/signin"  className="d-flex align-items-center text-info" style={{color:"white"}}><FaSignInAlt size={20} /><span className="ms-2">Signin</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <Routes>
        <Route
          path="/"
          element={<HomePageContent addToCart={addToCart} cartLength={cart.length} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/details" element={<Gown />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;