import React from "react";
import Card from 'react-bootstrap/Card';
import './dress.scss';
function Gown(){
  return(
    <>
    <h1><u><i>GOWNS</i></u></h1>
    <br/>
        <Card>
        <Card.Body>
            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/z8SMEryjTvQ" 
                title="Fashion video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <br/><br/>
            <p>A gown is a long, flowing dress typically worn for formal events, special occasions, or elegant evenings. 
            Known for its timeless beauty and graceful silhouette, the gown is a staple in every woman's 
            wardrobe when it comes to dressing up for weddings, galas, proms, or red carpet affairs.
            Available in a wide range of styles — from sleek and minimalist to voluminous and embellished — gowns are designed to make a statement. 
            They can feature a variety of necklines, sleeve lengths, fabrics, and detailing, allowing each piece to reflect personal taste and individuality.
            Whether you prefer classic elegance or modern drama, a well-chosen gown enhances your natural shape, boosts confidence, and creates a lasting impression. 
            It's not just an outfit — it's an experience in elegance.</p>
        </Card.Body>
        </Card>
        <br/>
        <br/>
        <h1><u><i>WESTERN WEAR</i></u></h1>
        <br/>
        <img src="https://m.media-amazon.com/images/I/61povrd0KNL._AC_UL640_QL65_.jpg" alt="western wear" height="400px" style={{display:"block",margin:"0 auto"}}/>
        <br/><br/> 
        <p style={{textAlign:"center"}}>Western wear is a broad category of clothing styles originating from Western countries like the United States and Europe. It's characterized by its practicality, comfort, and often casual or semi-formal aesthetic. This includes everyday clothing like jeans and t-shirts, as well as more formal options like suits and dresses. </p>
    </>
  )
}
export default Gown;