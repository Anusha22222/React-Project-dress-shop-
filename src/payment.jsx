import React, { useState, useEffect } from 'react';
import { Container, Alert, Button, Form, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';

function PaymentPage() {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [onlineMethod, setOnlineMethod] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayment = () => {
    const { name, address, city, pincode } = formData;
    if (!name || !address || !city || !pincode || !paymentMethod) {
      alert("Please fill all required fields and select a payment method.");
      return;
    }

    if (paymentMethod === 'Online') {
      if (!onlineMethod) {
        alert("Please select an online payment method.");
        return;
      }

      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setPaymentSuccess(true);
        localStorage.removeItem('cart');
      }, 2000);
    } else if (paymentMethod === 'COD') {
      setPaymentSuccess(true);
      localStorage.removeItem('cart');
    }
  };

  return (
    <Container className="my-5">
      {paymentSuccess && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />
      )}

      <h2 className="text-center mb-4 text-primary">🧾 Complete Your Order</h2>

      <Card className="mb-4 p-4 shadow-sm">
        <h4 className="text-success">Total Amount: ₹{totalAmount.toLocaleString()}</h4>
      </Card>

      <Form className="p-3 border rounded shadow-sm bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address:</Form.Label>
          <Form.Control as="textarea" rows={2} name="address" value={formData.address} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pincode:</Form.Label>
          <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Select Payment Type:</Form.Label>
          <div>
            <Form.Check 
              type="radio"
              label="Online Payment"
              name="paymentType"
              value="Online"
              checked={paymentMethod === 'Online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check 
              type="radio"
              label="Cash on Delivery"
              name="paymentType"
              value="COD"
              checked={paymentMethod === 'COD'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </Form.Group>

        {paymentMethod === 'Online' && (
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Choose Online Payment Method:</Form.Label>
            <div>
              <Form.Check 
                type="radio"
                label="Google Pay"
                name="onlineMethod"
                value="Google Pay"
                checked={onlineMethod === 'Google Pay'}
                onChange={(e) => setOnlineMethod(e.target.value)}
              />
              <Form.Check 
                type="radio"
                label="Paytm"
                name="onlineMethod"
                value="Paytm"
                checked={onlineMethod === 'Paytm'}
                onChange={(e) => setOnlineMethod(e.target.value)}
              />
              <Form.Check 
                type="radio"
                label="PhonePe"
                name="onlineMethod"
                value="PhonePe"
                checked={onlineMethod === 'PhonePe'}
                onChange={(e) => setOnlineMethod(e.target.value)}
              />
            </div>
          </Form.Group>
        )}

        <div className="text-center mt-4">
          <Button variant="success" onClick={handlePayment} disabled={processing || paymentSuccess}>
            {processing ? 'Processing...' : 'Confirm Order'}
          </Button>
        </div>
      </Form>

      {paymentSuccess && (
        <Alert variant="success" className="text-center mt-4 fs-4 fw-bold shadow-sm">
          {paymentMethod === 'Online' ? (
            <>
              🎉 Payment Successful via <span className="text-primary">{onlineMethod}</span>! <br />
              Thank you for shopping with <span className="text-success">Outfit Aura</span> 💖
            </>
          ) : (
            <>
              🛍️ Order placed successfully with <span className="text-warning">Cash on Delivery</span>! <br />
              We'll deliver to: <strong>{formData.address}, {formData.city} - {formData.pincode}</strong> <br />
              Thank you for shopping with <span className="text-success">Outfit Aura</span> 💖
            </>
          )}
        </Alert>
      )}

      {paymentSuccess && (
        <div className="text-center mt-3">
          <Link to="/">
            <Button variant="primary">Return to Home</Button>
          </Link>
        </div>
      )}
    </Container>
  );
}

export default PaymentPage;
