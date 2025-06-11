import React from "react";
import './dress.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'; // Import Modal for the cart

function Dress(){
    return(
    <React.Fragment>
      {/* It's generally not recommended to render <body> inside a React component.
          The <body> tag should be part of your main HTML file (e.g., public/index.html).
          If you need to apply global styles, use CSS or a global style component. */}
      {/* <body style={{overflowX:"hidden"}}>
      </body> */}
    </React.Fragment>
    );
}

function ContainerFluidExample() {
  return (
    <>
    <section id="home">
      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: "#e6f0dc" }}>
            <br />
            {/* Changed id to avoid duplicate with parent section */}
            <section id="home-content">
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
            alt="Woman in a red fluttering dress" // Descriptive alt text
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
            alt="Woman wearing maroon western wear" // Descriptive alt text
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
            alt="Woman draped in a traditional Indian saree" // Descriptive alt text
          />
          <Carousel.Caption>
            <h5 style={{ color: "white" }}>Saree</h5>
            <p style={{ color: "white" }}>Grace in Every Drape</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
    <br/><br/>
    </>
  );
}

function About(){
  return (
    <>
    <Container className="about-container text-center my-5">
      <h1><u><i>ABOUT</i></u></h1>
      <div className="about-text mx-auto mt-4 p-4">
        <p>
          At **Outfit Aura**, we believe that the right outfit doesn't just change how you look — it transforms how you feel.
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

// CardList now accepts an `addToCart` prop
function CardList({ addToCart }) {
  const cards = [
    {
      id: 'p1', // Unique ID for the product
      title: 'Elegant Gown',
      text: 'Elegant and perfect for special occasions.',
      image: 'https://media.samyakk.com/pub/media/tagalys/product_images/d/a/dark-carnation-pink-net-indowestern-gown-with-stone-work-and-flared-sleeve-gm1983.jpg',
      price: 15000 // Price for the product
    },
    {
      id: 'p2', // Unique ID for the product
      title: 'Chic Western Wear',
      text: 'Where rugged meets refined,Feel Confident and Own the Moment.',
      image: 'https://www.instyle.com/thmb/EiW-9mUUMryTaB2ANHN7WpGh-aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1065330062-4c92427c289f4a30a3d4cb04f978c8cc.jpg',
      price: 4500 // Price for the product
    },
    {
      id: 'p3', // Unique ID for the product
      title: 'Traditional Saree',
      text: 'Perfect for bridal wear, festivals, or timeless daily elegance.',
      image: 'https://media.samyakk.com/pub/media/tagalys/product_images/p/i/pink-and-silver-lycra-net-designer-saree-with-embroidered-readymade-blouse-ja2814.jpg',
      price: 9800 // Price for the product
    },
  ];

  return (
    <>
    <section id="shopnow">
    <h1><u><i>SHOP NOW</i></u></h1>
    <Container className="my-4">
      <Row>
        {cards.map((card) => ( // Using card.id for key instead of index
          <Col key={card.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} /> {/* Added alt text */}
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Text><strong>Price: ₹{card.price.toLocaleString()}</strong></Card.Text> {/* Display price */}
                {/* Changed to Add to Cart button */}
                <Button variant="primary" onClick={() => addToCart(card)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
    </>
  );
}

// GownGallery now accepts addToCart prop
function GownGallery({ addToCart }) {
  const gowns = [
    { id: 'g1', name: 'Mauve Pink Gown', price: 15000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/m/a/mauve-pink-net-stone-embroidered-reception-gown-with-slit-neck-gk1295.jpg' },
    { id: 'g2', name: 'Crimson Red Gown', price: 18000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/c/r/crimson-red-sequins-embroidered-net-reception-gown-hl2718.jpg' },
    { id: 'g3', name: 'Flamingo Pink Gown', price: 16500, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/f/l/flamingo-pink-bead-embroidered-net-reception-gown-hm3011.jpg' },
    { id: 'g4', name: 'Lilac Net Gown', price: 14000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/l/i/lilac-net-flared-style-indowestern-gown-with-assymetric-sleeve-and-sequins-work-gf3473.jpg' },
    { id: 'g5', name: 'Dark Purple Gown', price: 17500, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/d/a/dark-purple-silk-indowestern-gown-with-sequins-embroidery-and-net-dupatta-gd1502.jpg' },
    { id: 'g6', name: 'Horizon Blue Gown', price: 16000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/h/o/horizon-blue-stone-embroidered-net-indowestern-gown-nj1587.jpg' },
  ];

  return (
    <>
    <br/>
    {/* Changed id to avoid duplicate with other galleries */}
    <section id="gown-gallery">
    <h1><u><i>GOWN GALLERY</i></u></h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {gowns.map(gown => (
        <Card key={gown.id} style={{ width: '18rem', margin:"50px" }}>
          <Card.Img variant="top" src={gown.image} alt={gown.name} />
          <Card.Body>
            <Card.Title>{gown.name}</Card.Title>
            <Card.Text>₹{gown.price.toLocaleString()}</Card.Text>
            {/* Changed to Add to Cart button */}
            <Button variant="primary" onClick={() => addToCart(gown)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

// WesternWearGallery now accepts addToCart prop
function WesternWearGallery({ addToCart }) {
  const westernWear = [
    { id: 'w1', name: 'Denim Jumpsuit', price: 3500, image: 'https://images-eu.ssl-images-amazon.com/images/I/61hOP5LrDlL._AC_UL165_SR165,165_.jpg' },
    { id: 'w2', name: 'Boho Maxi Dress', price: 4200, image: 'https://m.media-amazon.com/images/I/714enYEJ18L._SX679_.jpg' },
    { id: 'w3', name: 'Leather Jacket', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GuveQ3-1FWZldMKWJBxDWVQEy9BLEwM53g&' },
    { id: 'w4', name: 'Printed Tunic', price: 2800, image: 'https://m.media-amazon.com/images/I/71E5GSrmRAL._AC_UL320_.jpg' },
    { id: 'w5', name: 'Casual Shirt Dress', price: 3100, image: 'https://m.media-amazon.com/images/I/61Su7JLpk0L._AC_UL320_.jpg' },
    { id: 'w6', name: 'Stylized Jeans', price: 4500, image: 'https://m.media-amazon.com/images/I/71-U2swkaEL._AC_UL320_.jpg' },
  ];

  return (
    <>
    <br/>
    {/* Changed id to avoid duplicate with other galleries */}
    <section id="western-wear-gallery">
    <h1><u><i>WESTERN WEAR GALLERY</i></u></h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {westernWear.map(item => (
        <Card key={item.id} style={{ width: '18rem', margin:"50px" }}>
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>₹{item.price.toLocaleString()}</Card.Text>
            {/* Changed to Add to Cart button */}
            <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

// SareeGallery now accepts addToCart prop
function SareeGallery({ addToCart }) {
  const sarees = [
    { id: 's1', name: 'Blue Printed Saree', price: 8500, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/b/l/blue-printed-crepe-designer-saree-with-embroidered-sleeveless-blouse-ja2656.jpg' },
    { id: 's2', name: 'Pink Tussar Saree', price: 9200, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/p/i/pink-and-yellow-woven-tussar-saree-with-contrast-border-unstitched-blouse-im01034.jpg' },
    { id: 's3', name: 'Lavender Tissue Saree', price: 7800, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/l/a/lavender-dori-embroidered-tissue-designer-saree-with-unstitched-blouse-jb2572.jpg' },
    { id: 's4', name: 'Multicolor Banarasi Saree', price: 12000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/m/u/multicolor-zari-woven-banarasi-silk-saree-with-unstitched-blouse-ja2180.jpg' },
    { id: 's5', name: 'Green Organza Saree', price: 11000, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/g/r/green-purple-zari-woven-banarasi-organza-saree-ek01585.jpg' },
    { id: 's6', name: 'Golden Yellow Organza Saree', price: 9800, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/g/o/golden-yellow-zari-woven-banarasi-organza-saree-with-unstitched-blouse-km00201.jpg' },
  ];

  return (
    <>
    <br/>
    {/* Changed id to avoid duplicate with other galleries */}
    <section id="saree-gallery">
    <h1><u><i>SAREE GALLERY</i></u></h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {sarees.map(saree => (
        <Card key={saree.id} style={{ width: '18rem', margin:"50px" }}>
          <Card.Img variant="top" src={saree.image} alt={saree.name} />
          <Card.Body>
            <Card.Title>{saree.name}</Card.Title>
            <Card.Text>₹{saree.price.toLocaleString()}</Card.Text>
            {/* Changed to Add to Cart button */}
            <Button variant="primary" onClick={() => addToCart(saree)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

function Testinomials(){
  return(
    <>
    <br />
    <section id="testinomials">
      <Container className="py-5">
        <h1 className="text-center mb-4"><u><i>TESTIMONIALS</i></u></h1>
        <br/>
        <Row className="justify-content-center">
          <Col md={4} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Text><i>"Outfit Aura transformed my wardrobe. I feel confident in every outfit!"</i></Card.Text>
                <Card.Footer className="text-end">- Priya M.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Text><i>"Beautiful collection, high quality, and fast delivery. Highly recommend!"</i></Card.Text>
                <Card.Footer className="text-end">- Neha K.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Text><i>"Love the modern twist on traditional styles!"</i></Card.Text>
                <Card.Footer className="text-end">- Aarti V.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

function Mission(){
      return(
      <>
        <br />
        <section id="mission">
          <Container className="py-5">
            <h1 className="text-center mb-4"><u><i>OUR MISSION</i></u></h1>
            <br/>
            <Row className="align-items-center">
              <Col md={6}>
                <div id="missionText" className="lead">
                  <img
                    src="https://byshree.com/cdn/shop/articles/Empowering-Women-Through-Fashion_1.jpg?crop=center&height=1200&v=1698403678&width=1200"
                    alt="Empowered woman fashion" // Descriptive alt text
                    className="img-fluid rounded shadow"
                  />
                </div>
                <br/>
                {/* This button's functionality is handled by jQuery in componentDidMount of Footer.
                    Consider using React state for show/hide functionality instead of direct DOM manipulation. */}
                <Button variant="outline-dark" id="toggleMission" className="mb-3" style={{backgroundColor:"blue",color:"white"}}>
                    Show/Hide Mission
                </Button>
              </Col>
              <Col md={6}>
                <p>
                  At Outfit Aura, our mission is to redefine how women experience fashion. We aim to empower confidence through
                  elegant styles, sustainable sourcing, and inclusive design that celebrates every woman's uniqueness.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
      );
}

function Fashion(){
      return(
      <>
      <br/>
      <section id="fashion">
            <Container className="py-5">
              <h1 className="text-center mb-4"><u><i>FASHION TIPS</i></u></h1>
              <br/>
              <Row className="g-4">
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title>Dress for the Occasion</Card.Title>
                      <Card.Text>
                        Whether it's a wedding or brunch, match your outfit to the vibe and setting for a confident impression.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title>Accessorize Smartly</Card.Title>
                      <Card.Text>
                        A bold necklace or subtle earrings can elevate any outfit. Less is often more!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title>Confidence is Key</Card.Title>
                      <Card.Text>
                        The most important element of any outfit is how you wear it — confidence completes your look.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </section>
      </>
      );
}

// New Cart Component
function Cart({ cartItems, removeFromCart, show, handleClose }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                <div>
                  <strong>{item.name || item.title}</strong> (Qty: {item.quantity})<br /> {/* Use name or title */}
                  <small>₹{(item.price * item.quantity).toLocaleString()}</small>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
        )}
        <h4 className="mt-3">Total: ₹{total.toLocaleString()}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert('Proceeding to checkout! (Payment integration not implemented yet)')}>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Contact(){
  return(
    <>
      <section id="contact" >
        <h1><u><i>CONTACT US</i></u></h1>
        <br/>
        <div style={{height:"200px",width:"400px",backgroundColor:"#e6f0dc",alignItems:"center",display:"block",margin:"0 auto",padding:"20px"}}>
          <i><p>Email:outfitaura@gmail.com</p>
          <p>Phoneno:+123 789 089</p>
          <p>Address:Style city,Chennai</p></i>
        </div>
    </section>
    </>
  );
}

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Welcome to Outfit Aura",
      cart: [], // Initialize cart as an empty array for items
      showCartModal: false, // State to control cart modal visibility
    };
  }

  // UNSAFE_componentWillMount is deprecated. Use componentDidMount for side effects.
  componentWillMount() {
    console.log("Page is about to load (using deprecated componentWillMount)");
  }

  handleSectionClick = (section) => {
    alert(`Mapsd to ${section}`);
  };

  // Function to add an item to the cart
  addToCart = (product) => {
    this.setState(prevState => {
      const existingItemIndex = prevState.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        // If item exists, increase quantity
        const updatedCart = [...prevState.cart];
        updatedCart[existingItemIndex].quantity += 1;
        return { cart: updatedCart };
      } else {
        // If item doesn't exist, add it with quantity 1. Use name or title for cart display.
        return { cart: [...prevState.cart, { ...product, quantity: 1, name: product.title || product.name }] };
      }
    }, () => {
      // Use console.log for non-intrusive feedback
      console.log(`${product.title || product.name} added to cart! Current cart:`, this.state.cart);
    });
  };

  // Function to remove an item from the cart
  removeFromCart = (productId) => {
    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.id !== productId)
    }), () => {
      console.log("Item removed from cart! Current cart:", this.state.cart);
    });
  };

  // Functions to manage cart modal visibility
  handleShowCart = () => this.setState({ showCartModal: true });
  handleCloseCart = () => this.setState({ showCartModal: false });

  render() {
    return (
      <>
        {/* The <Dress /> component is empty, consider removing if no content */}
        <Dress />
        <ContainerFluidExample />
        <br />
        <About/>
        <br />
        {/* Pass addToCart function to all components that have "Add to Cart" buttons */}
        <CardList addToCart={this.addToCart} />
        <br />
        <GownGallery addToCart={this.addToCart} />
        <br />
        <WesternWearGallery addToCart={this.addToCart} />
        <br />
        <SareeGallery addToCart={this.addToCart} />
        <br />
        <Testinomials />
        <br />
        <Mission/>
        <br/>
        <Fashion />
        <br />
        {/* Button to view cart */}
        <div className="text-center my-4">
          <Button variant="success" onClick={this.handleShowCart}>
            View Cart ({this.state.cart.length})
          </Button>
        </div>

        {/* Cart Modal - Rendered before contact section as requested */}
        <Cart
          cartItems={this.state.cart}
          removeFromCart={this.removeFromCart}
          show={this.state.showCartModal}
          handleClose={this.handleCloseCart}
        />

        <Contact />
        <br />
        {/* Display the value state. this.state.name is not defined. */}
        <h1 className="text-center my-3">{this.state.value}</h1>


        {/* Footer Section */}
        <footer style={{ backgroundColor: "black", padding: "1rem", textAlign: "center" }}>
          <p style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Outfit Aura. All rights reserved.
          </p>
        </footer>
      </>
    );
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({value:"Thank you for visiting the page"});
      // Replaced alert with console.log for better UX
      console.log("Page loaded. The webpage is ready to view.");
    },5000);

    // This alert is intrusive. Consider a React confirmation modal for leaving.
    window.onbeforeunload = () => {
      return "Are you sure you want to leave?";
    };

    // Ensure jQuery is loaded before trying to use it.
    // In a React app, it's generally better to use React state for UI toggles.
    if (window.$) {
      window.$("#toggleMission").click(function () {
        window.$("#missionText").slideToggle();
      });
    } else {
      console.warn("jQuery is not loaded. The 'Show/Hide Mission' button might not work as expected.");
    }
  }
}

export default Footer;