import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/landing.css";
import logo from '../images/e-com-logo.jpg';
import UserLogin from './User/UserLogin'

const LandingPage = () => {
    return (
        <div className='Landing-container'>
            <nav>
                <img style={{
                    "width": "40px", "height": "40px",
                    "borderRadius": "50px"
                }} src={logo} alt="logo" />
                <Link to={'/'}>
                    <button className='login-button'>Login</button>
                </Link>            </nav>
            <div className='left-section'>
                <h1>Bringing You the Latest Trends and Timeless Classics</h1>
                <Link to={'/userRegister'}>
                    <button className='userRegister'>User Register</button>
                </Link>

            </div>
            <div className='right-section'>
                <UserLogin />
            </div>
        </div>
    )
}

export default LandingPage
