import React from "react"; 
import './dress.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';


function ContainerFluidExample() {
  return (
    <>
    <section id="home">
      <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <video
              className="d-block w-100 carousel-image"
              src="https://www.shutterstock.com/shutterstock/videos/3682701679/preview/stock-footage-fantasy-woman-queen-walks-runs-in-gothic-forest-black-trees-trunk-mystery-lady-long-red-dress.webm" 
              autoPlay
              loop
              muted
              playsInline
            />
            <Carousel.Caption>
              <h5 style={{ color: "white" }}>Gowns</h5>
              <p style={{ color: "white" }}>Elegant Gowns for Every Occasion</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <video
              className="d-block w-100 carousel-image"
              src="https://www.shutterstock.com/shutterstock/videos/1108933775/preview/stock-footage-indian-girl-in-indian-traditional-bridal-wear-in-photoshoot-in-studio-royal-background-anand.webm"
              autoPlay
              loop
              muted
              playsInline
            />
            <Carousel.Caption>
              <h5 style={{ color: "white" }}>Salwar Kameez</h5>
              <p style={{ color: "white" }}>Simple, Elegant, and SEO-friendly</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <video
              className="d-block w-100 carousel-image"
              src="https://www.shutterstock.com/shutterstock/videos/3663932031/preview/stock-footage-indian-woman-tourist-wearing-traditional-saree-and-exploring-architectural-monuments-in-jaipur.webm" 
              autoPlay
              loop
              muted
              playsInline
            />
            <Carousel.Caption>
              <h5 style={{ color: "white" }}>Saree</h5>
              <p style={{ color: "white" }}>Grace in Every Drape</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <br /><br />
    </>
  );
}

function About() {
  return (
    <>
      <section id="about">
        <Container className="about-container text-center my-5">
          <h1 className="text-center"><i>ABOUT</i></h1><br />
              <div className="embed-responsive embed-responsive-16by9">
              <Card>
              <Card.Body>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/zz3FWhhJD0g?modestbranding=1&rel=0&showinfo=0&controls=1"
                  title="Fashion video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                </Card.Body>
                </Card>
              </div>
              <div className="about-text mx-auto mt-4 p-4">
                <p>
                  At <strong>Outfit Aura</strong>, we believe that the right outfit doesn't just change how you look — it transforms how you feel.
                  Our mission is to help every woman discover her unique aura through carefully curated pieces that inspire confidence, grace, and self-expression.
                  Founded with a passion for style and a love for empowering women, Outfit Aura blends timeless elegance with modern trends.
                  Whether you're searching for a statement dress for a special occasion or everyday pieces that reflect your personality, you'll find designs that are both flattering and unforgettable.
                </p>
              </div>
        </Container>
        <br/>
      </section>
    </>
  );
}


function CardList() {
  const cards = [
    {
      id: 'p1', // Unique ID for the product
      text: 'Elegant and perfect for special occasions.',
      image: 'https://media.samyakk.com/pub/media/tagalys/product_images/d/a/dark-carnation-pink-net-indowestern-gown-with-stone-work-and-flared-sleeve-gm1983.jpg',
    },
    {
      id: 'p2', // Unique ID for the product
      text: 'Grace in Every Stitch and Celebrate Elegance in Every Thread',
      image: 'https://media.samyakk.com/pub/media/tagalys/product_images/r/u/ruby-pink-mirror-embroidered-silk-crop-top-suit-sl12921.jpg',
    },
    {
      id: 'p3', // Unique ID for the product
      text: 'Perfect for bridal wear, festivals, or timeless daily elegance.',
      image: 'https://media.samyakk.com/pub/media/tagalys/product_images/p/i/pink-and-silver-lycra-net-designer-saree-with-embroidered-readymade-blouse-ja2814.jpg',
    },
  ];

  return (
    <>
    <section id="gallery">
    <h1><i>GALLERY</i></h1>
    <Container className="my-4">
      <Row>
        {cards.map((card) => ( // Using card.id for key instead of index
          <Col key={card.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} /> {/* Added alt text */}
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Link to="/details">
              <Button variant="primary" onClick={() => alert(`Details about products!`)} className="me-2">Details</Button>
            </Link>
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
    <section id="shopnow">
    <h1><i>SHOP NOW</i></h1>
    <h1><i>GOWN</i></h1>
    <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '20px', padding: '0 20px' }}>
      {gowns.map(gown => (
        <Card key={gown.id} className="gallery-card" style={{ width: '18rem', flex: '0 0 auto' }}> 
          <Card.Img variant="top" src={gown.image} alt={gown.name} />
          <Card.Body>
            <Card.Title>{gown.name}</Card.Title>
            <Card.Text>₹{gown.price.toLocaleString()}</Card.Text>
            <Button variant="primary" onClick={() => {addToCart(gown); alert(`${gown.name} added to cart!`);}}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

function WesternWearGallery({ addToCart }) {
  const westernWear = [
    { id: 'w1', name: 'Dusty Lilac Net Crop Top ', price: 16850, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/d/u/dusty-lilac-net-crop-top-suit-with-sequins-work-and-jewel-neck-gh5109.jpg'},
    { id: 'w2', name: 'Green Crepe', price: 17190, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/g/r/green-crepe-party-wear-salwar-kameez-with-zari-work-and-slit-sleeves-sl13779.jpg' },
    { id: 'w3', name: 'Pink Georgette', price: 19890, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/p/i/pink-georgette-crop-top-suit-with-sequins-work-and-pentagon-neck-sl13775.jpg' },
    { id: 'w4', name: 'Grey Georgette', price: 23990, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/g/r/grey-georgette-palazzo-suit-with-sequins-work-and-front-slit-sl13777.jpg' },
    { id: 'w5', name: 'Blue Crepe', price: 23790, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/b/l/blue-crepe-crop-top-suit-with-sequins-work-and-sweet-heart-neck-gg1369.jpg' },
    { id: 'w6', name: 'Mustard Yellow Silk Crop', price: 19950, image: 'https://media.samyakk.com/pub/media/tagalys/product_images/m/u/mustard-yellow-silk-crop-top-suit-with-sequins-work-and-embroidered-jacket-gh6848.jpg' },
  ];

  return (
    <>
    <br/>
    <section id="shopnow">
    <h1><i>SALWAR KAMEEZ</i></h1>
    <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '20px', padding: '0 20px' }}>
      {westernWear.map(item => (
        <Card key={item.id} className="gallery-card" style={{ width: '18rem', flex: '0 0 auto' }}>
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>₹{item.price.toLocaleString()}</Card.Text>
            <Button variant="primary" onClick={() => {addToCart(item);alert(`${item.name} added to cart!`);}}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

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
    <section id="shopnow">
    <h1><i>SAREE</i></h1>
    <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '20px', padding: '0 20px' }}>
      {sarees.map(saree => (
       <Card key={saree.id} className="gallery-card" style={{ width: '18rem', flex: '0 0 auto' }}>
          <Card.Img variant="top" src={saree.image} alt={saree.name} />
          <Card.Body>
            <Card.Title>{saree.name}</Card.Title>
            <Card.Text>₹{saree.price.toLocaleString()}</Card.Text>
            <Button variant="primary" onClick={() => {addToCart(saree);alert(`${saree.name} added to cart!`);}}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
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
            <h1 className="text-center mb-4"><i>OUR MISSION</i></h1>
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
              <h1 className="text-center mb-4"><i>FASHION TIPS</i></h1>
              <br/>
              <div className="embed-responsive embed-responsive-16by9">
              <Card>
              <Card.Body>
                <iframe width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/xxJh1DOxhBc" 
                title="Tamil  girls saree " 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
                allowfullscreen></iframe>
                </Card.Body>
                </Card>
              </div>
              <br/><br/>
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

function Contact() {
  return (
    <section id="contact">
      <h1><i>CONTACT US</i></h1>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#222",
              fontFamily: "'Playfair Display', serif"
            }}>
              <i>Get In Touch</i>
            </h2>
            <p style={{ color: "black", fontSize: "1.1rem" }}>
              We'd love to hear from you! Whether you have a question about styles, sizes, or anything else — our team is ready to answer all your queries.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <div style={contactBoxStyle}>
              <FaEnvelope style={iconStyle} />
              <h5>Email</h5>
              <p>outfitaura@gmail.com</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <div style={contactBoxStyle}>
              <FaPhoneAlt style={iconStyle} />
              <h5>Phone</h5>
              <p>+1 (123) 456-7890</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <div style={contactBoxStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <h5>Address</h5>
              <p>Style City, Chennai</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const contactBoxStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  textAlign: "center"
};

const iconStyle = {
  fontSize: "30px",
  color: "#e91e63",
  marginBottom: "10px"
};

class HomePageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Welcome to Outfit Aura!",
    };
  }

  componentWillMount() {
    alert("Page is about to load.");
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({value:"Thank you for visiting Outfit Aura"});
      console.log("Page loaded. The webpage is ready to view.");
    },5000);

    window.onbeforeunload = () => {
      return "Are you sure you want to leave?";
    };

    if (window.$) {
      window.$("#toggleMission").click(function () {
        window.$("#missionText").slideToggle();
      });
    } else {
      console.warn("jQuery is not loaded. The 'Show/Hide Mission' button might not work as expected.");
    }
  }

  render() {
    // addToCart and cartLength are passed as props from App.js
    const { addToCart, cartLength } = this.props;

    return (
      <>
        <ContainerFluidExample />
        <br />
        <About/>
        <br />
        <CardList addToCart={addToCart} />
        <br />
        <GownGallery addToCart={addToCart} />
        <br />
        <WesternWearGallery addToCart={addToCart} />
        <br />
        <SareeGallery addToCart={addToCart} />
        <br />
        <Mission/>
        <br/>
        <Fashion />
        <br />
        {/* The "View Cart" button now uses Link to navigate to the /cart route */}
        <div className="text-center my-4">
          <Button as={Link} to="/cart" variant="success">
            View Cart ({cartLength})
          </Button>
        </div>

        <Contact />
        <br />
        <h1 className="text-center my-3">{this.state.value}</h1>

        {/* Footer Section - Keep this here if it's part of the main page */}
        <footer style={{ backgroundColor: "#6f4e37", color: "#f1f1f1", padding: "2rem 1rem" }}>
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto"
  }}>
    {/* Company Info */}
    <div style={{ flex: "1 1 250px", marginBottom: "1rem" }}>
      <h3 style={{ color: "#ffffff" }}>Outfit Aura</h3>
      <p style={{ color: "#cccccc" }}>Elevate your style with handpicked fashion trends. We bring the runway to your doorstep.</p>
    </div>

    {/* Quick Links */}
    <div style={{ flex: "1 1 150px", marginBottom: "1rem" }}>
      <h4 style={{ color: "#ffffff" }}>Quick Links</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="#about" style={{ color: "#cccccc", textDecoration: "none" }}>About Us</a></li>
        <li><a href="#gallery" style={{ color: "#cccccc", textDecoration: "none" }}>Gallery</a></li>
        <li><a href="#shopnow" style={{ color: "#cccccc", textDecoration: "none" }}>Shop</a></li>
        <li><a href="#contact" style={{ color: "#cccccc", textDecoration: "none" }}>Contact</a></li>
        <li><Link to="/signin" style={{ color: "#cccccc", textDecoration: "none" }}>Sign-in</Link></li>
        <li><Link to="/cart" style={{ color: "#cccccc", textDecoration: "none" }}>AddtoCart</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div style={{ flex: "1 1 200px", marginBottom: "1rem" }}>
      <h4 style={{ color: "#ffffff" }}>Contact</h4>
      <p style={{ color: "#cccccc" }}>Email: outfitaura@gmail.com</p>
      <p style={{ color: "#cccccc" }}>Phone: +1 (123) 456-7890</p>
    </div>

    {/* Social Media */}
    <div style={{ flex: "1 1 200px", marginBottom: "1rem" }}>
      <h4 style={{ color: "#ffffff" }}>Follow Us</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <a href="https://facebook.com" style={{ color: "#cccccc", textDecoration: "none" }}>Facebook</a><br/>
        <a href="https://instagram.com" style={{ color: "#cccccc", textDecoration: "none" }}>Instagram</a><br/>
        <a href="https://twitter.com" style={{ color: "#cccccc", textDecoration: "none" }}>Twitter</a>
      </ul>
    </div>
  </div>

  <div style={{ textAlign: "center", borderTop: "1px solid #333", marginTop: "2rem", paddingTop: "1rem", fontSize: "bold", color: "white" }}>
    &copy; {new Date().getFullYear()} Outfit Aura. All rights reserved.
  </div>
</footer>

      </>
    );
  }
}

// Export all components needed by App.js
export {
  ContainerFluidExample,
  About,
  CardList,
  GownGallery,
  WesternWearGallery,
  SareeGallery,
  Mission,
  Fashion,
  Contact,
  HomePageContent // Export the main content component
};


