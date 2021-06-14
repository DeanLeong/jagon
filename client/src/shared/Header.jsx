import React from 'react';
import { Link } from "react-router-dom"
import './Header.css'

function Header(props) {
  return (
    <div className="nav-bar">
      <div className="nav-contents">
          <Link to="/home">
            <p id="nav-home">Home</p>
          </Link>
          <Link to="/groupnotes">
            <p id="nav-notes">Notes</p>
          </Link>
        <Link to="/about">
            <p id="nav-about">About</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;