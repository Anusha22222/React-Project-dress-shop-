import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
<div className="d-flex flex-row justify-content-around">
<Link to='/'><p>sheeba1</p></Link>
<Link to='/about'><p>sheeba2</p></Link>
<Link to='/contact'><p>sheeba3</p></Link>
<Link to='/'><p>sheeba4</p></Link>
<Link to='/about'>karthii</Link>

</div>
        </>
    )

}