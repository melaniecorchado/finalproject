import React from 'react';
import "../style/app.css";
import {Link} from "react-router-dom";



const Header = () => (
 <div>
    <Link to="/home"><h2 className="title1">Home</h2></Link>
    <Link to="/community"><h2 className="title2">Community</h2></Link>
    <Link to="/storm"><h2 className="title3">Storm</h2></Link>
    
 </div>
)

export default Header;