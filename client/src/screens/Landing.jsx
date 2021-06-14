import React from 'react';
import { Link } from 'react-router-dom'

import './Landing.css'

function Landing(props) {
  return (
    <div className="landing-container">
      <div>
        <h1 className="title">Jagon</h1>
        <p className="infotxt">Wildemount's HEAVIEST Band</p>
      </div>
      <div className="reviews">
        <p>Think of funny reviews</p>
      </div>
      <Link to={"/home"}><button className="enter-button">Enter</button></Link>
    </div>
  );
}

export default Landing;