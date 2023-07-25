import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import Products from './component/Products';
import UserRegister from './component/User/UserRegister';
import { useEffect, useState } from 'react';
import ProductDetails from './component/ProductDetails';
import CartProduct from './component/CartProduct';
import Checkout from './component/Checkout';
import PaymentSuccess from './component/PaymentSuccess'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch(`http://localhost:5000/product/`);
        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setItems(data.products);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getAllProducts();
  }, []);
  console.log(items);

  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/userRegister'} element={<UserRegister />} />
          <Route path={'/product'} element={<Products items={items} />} />
          <Route path={'/product/:id'} element={<ProductDetails />} />
          <Route path='/cart' element={<CartProduct />} />
          <Route path='/checkout/:id' element={<Checkout />} />
          <Route path='/payment/success' element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;