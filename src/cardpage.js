import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartPage({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4"><i>Your Shopping Cart</i></h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <Row className="justify-content-center">
            {cartItems.map(item => (
              <Col key={item.id} xs={12} md={8} lg={6} className="mb-3">
                <CartItemCard
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              </Col>
            ))}
          </Row>
          <hr />
          <h3 className="text-end mt-4">Total: ₹{total.toLocaleString()}</h3>
          <div className="d-flex justify-content-end mt-4">
            <Link to="/">
              <Button variant="secondary" className="me-2">Continue Shopping</Button>
            </Link>
            <Button variant="primary" onClick={() => navigate('/payment', { state: { totalAmount: total } })}>Payment</Button>
          </div> 
        </>
      )}
    </Container>
  );
}

// Component for individual cart items
function CartItemCard({ item, removeFromCart, updateQuantity }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <Image
        src={item.image}
        alt={item.name || item.title}
        style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px', borderRadius: '4px' }}
      />
      <div style={{ flexGrow: 1 }}>
        <h5 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name || item.title}</h5>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            style={{ marginRight: '8px' }}
          >−</Button>
          <span>{item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            style={{ marginLeft: '8px' }}
          >+</Button>
        </div>
        <p style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'bold' }}>
          ₹{(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        className="ms-auto"
        style={{ padding: '5px 10px', fontSize: '0.8rem' }}
      >
        Remove
      </Button>
    </div>
  );
}

export default CartPage;

