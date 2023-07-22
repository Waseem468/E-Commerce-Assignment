import React from 'react';
import '../styles/landing.css'
import { Link } from 'react-router-dom';
import logo from '../images/e-com-logo.jpg'

const NavBar = () => {
  return (
    <div>
      <nav>
        <img style={{
          "width": "40px", "height": "40px",
          "borderRadius": "50px"
        }} src={logo} alt="logo" />
        <div fas icon="shopping-cart">
        </div>
        <Link to={'/'}>
          <button className='login-button'>Logout</button>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
