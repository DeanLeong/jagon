import React from 'react';
import { Link } from "react-router-dom"
import './Header.css'

function Header(props) {
  return (
    <div className="nav-bar">
      <div className="nav-contents">
          <Link to="/home">
            <p>Home</p>
          </Link>
      </div>
    </div>
  );
}

export default Header;