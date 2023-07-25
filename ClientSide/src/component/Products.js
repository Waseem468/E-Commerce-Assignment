import React from 'react';
import NavBar from './NavBar';
import { MDBRipple, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export const currDesign = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'inr',
});

export const truncate = (str, n) => {
  return String(str).length > n ? String(str).substring(0, n - 1) + '...' : str;
};

const Products = ({ items }) => {
  const { searchTerm } = useContext(ProductContext);

  const filteredItems = items?.filter((val) => {
    if (searchTerm === '') {
      return val;
    } else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return false;
  });

  return (
    <>
      <div style={{ marginBottom: '80px' }}>
        <NavBar />
      </div>
      <div style={{ marginLeft: '20px' }}>
      <SearchBar />
      </div>
      <MDBRow
        style={{
          minHeight: '100vh',
        }}
        id={'products'}
        className='mb-5 d-flex align-items-center justify-content-center'
      >
        {filteredItems?.map((x, i) => (
          <MDBCol
            key={i}
            size={6}
            md={4}
            lg={3}
            className='card m-2 g-3 d-flex align-items-center justify-content-center'
            style={{
              width: '250px',
              height: '450px',
              background: 'light-green',
              boxShadow: '5px 5px 5px 5px',
            }}
          >
            <MDBRipple rippleColor='dark' rippleTag={'div'} className='bg-image hover-zoom'>
              <Link to={`/product/${x?.id}`}>
                <img width={200} style={{ padding: '20px' }} src={x?.asset} alt='asset' />
              </Link>
            </MDBRipple>
            <div className='card-body me-auto'>
              <Link to={`/product/${x?.id}`}>
                <p className='card-title text-dark'>{truncate(x?.itemName, 25)}</p>
                <strong className='text-dark'>{currDesign.format(x?.itemPrice)}</strong>
              </Link>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>{x?.category}</small>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
};

export default Products;
