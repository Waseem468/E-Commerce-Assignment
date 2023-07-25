import React, { useContext } from 'react'
import { MDBContainer, MDBNavbarNav, MDBNavbarItem, MDBNavbar, MDBIcon,MDBBtn,MDBBadge } from "mdb-react-ui-kit"
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import logo from '../images/e-com-logo.jpg'

const NavBar = () => {
  const { count } = useContext(ProductContext)
  return (
    <div>
      <MDBNavbar expand="lg" light bgcolor='light'
        className='mb-3 fixed-top'>
        <MDBContainer fluid>
          <MDBNavbarNav left fullWidth={false}
            className='d-flex flex-row'>
            <MDBNavbarItem className='me-3 me-lg-2'>
              <Link to="/" >
                <img style={{
                  "width": "40px", "height": "40px",
                  "borderRadius": "50px"
                }} src={logo} alt="logo" />
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav right fullWidth={false}
            className='d-flex flex-row'>
            <MDBNavbarItem right fullWidth={false}  className='d-flex flex-row'>
              <Link to="/" >
                <MDBBtn style={{ height: "30px", textAlign: "center" }}>Logout</MDBBtn>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav right fullWidth={false}
            className='d-flex flex-row' >
            <MDBNavbarItem>
              <Link to="/cart">
                <span  style={{marginRight:"2px"}}>
                  <MDBIcon color='white' fas icon="shopping-cart" />
                </span>
                <MDBBadge pill color='danger'>
                  {count}
                </MDBBadge>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default NavBar
