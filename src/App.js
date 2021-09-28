import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import Choose from './components/Choose';
import Food from './components/Food';
import Partners from './components/Partners';
import Surprise from './components/Surprise';
import Slider from './components/Slider';
import Friend from './components/Friend';
import Footer from './components/Footer';
import Cart from './components/Cart';

const App = () => {

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
    setShow(true);
  }

  useEffect(() => {
    
    const url = "http://localhost:3001/products?_limit=4";

    axios.get(url) 
      .then((response) => {
        setProducts(response.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  const addProductToCart = (product) => {
    setCart([
      ...cart,
      product  
    ]);
    handleShow();
  }

  const deleteProductoOfCart = (productId) => {

    const productsNew = cart.filter(product => {
      return product.id !== productId;
    });

    setCart(productsNew);

  }

  const deleteAllProducts = () => {
    setCart([]);
  }

  return (
    <>
      <Cart 
        show={show} 
        onHide={handleClose}
        cart={cart} 
        deleteProductoOfCart={deleteProductoOfCart}
        deleteAllProducts={deleteAllProducts}
      />
      <Header  
        handleShow={handleShow}
        cart={cart}
      />
      <ListProducts 
        listProducts={products}
        addProductToCart={addProductToCart}
      />
      <Choose />
      <Food />
      <Partners />
      <Surprise />
      <Slider />
      <Friend />
      <Footer />
    </>
  );
}

export default App;
