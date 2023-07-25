import axios from 'axios'
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import { currDesign } from './Products'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

const ProductDetails = () => {
    const { product, setCount, setProduct, count, basket, setBasket } = useContext(ProductContext)

    const { id } = useParams()
    const navigate = useNavigate()

    const addToCart = () => {
        setCount(count + 1);
        setBasket([...basket, product]);

    }

    const handleCheckout = async () => {
        await axios.get(`https://e-commerce-store1.onrender.com/secret/${product?.itemPrice}`).then((res) => {
            navigate(`/checkout/${res.data.client_secret}`)
        })
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/product/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductDetails();
    }, [id]);


    return (
        <>
       <div style={{ marginBottom: '80px' }}>
        <NavBar />
      </div>
          <MDBContainer className='mb-5'>
            <Link to='/'>
                <MDBIcon fas icon='home' />
            </Link>
            <MDBRow>
                <MDBCol size={12} lg={4} id="firstcol">
                    <p>Product details</p>
                    <p>ID:{product?._id}</p>
                    <p style={{ color: "red" }}>{product?.category}</p>
                    <hr />
                    <img style={{
                        maxWidth: "300px",
                        maxHeight: "300px"
                    }}
                        src={product?.asset}
                        alt='prodimage' />
                    <hr />
                </MDBCol>
                <MDBCol style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '30px'
                }} size={12} lg={4} id="secondCol">
                    <h3 className='fw=400'>{product?.category}</h3>
                    <strong style={{
                        fontSize: "32px"
                    }}>{currDesign.format(product?.itemPrice)}</strong>
                </MDBCol>
                <MDBCol size={12} lg={4} id="thirdCol">
                    <p>{product?.itemDetails}</p>
                    <MDBBtn onClick={addToCart} className='ms-2' tag={'a'} color='success'
                        size='lg' outline>
                        <MDBIcon fas icon="shopping-cart" />
                        Add to Cart</MDBBtn>
                    <MDBBtn onClick={handleCheckout} className='ms-2 mt-2' tag={'a'} color='success'
                        size='lg' outline >Start Order Now</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
      
    )
}

export default ProductDetails
