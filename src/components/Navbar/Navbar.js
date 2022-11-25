import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-head">
        <ul>
          <Link to="/about"><li>Meals <span>APP</span></li></Link>
          
        </ul>
        
      </div>
      <div className="navbar-head2">
        <h1>Praktikum <span>PPB</span> 2022 &copy;</h1>
        <h2>Design by <span>Ilham Pratama</span></h2>
    </div>

    </div>
  )
}

export default Navbar