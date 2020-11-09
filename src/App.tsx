import React, { useState, useEffect } from 'react'
import { sendRequest } from './api/sendRequest'
import * as requests from './api/requests'

import bgimg from './bgimg.jpeg'

import './reset.css'
import './bootstrap.css';

import ProductSection from './components/products/ProductSection'
import UserFormSection from './components/userForm/UserFormSection'
import OrderSection from './components/orders/OrderSection'
import Footer from './components/Footer'

///
/// Main Page
///
const App = () => {

  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const styles = {
    page: {
      margin: 'auto',
      width: 1000,
      minHeight: height + 200, 
      // outline: 'red solid 1px',
    },

    header: {
      display: 'block',
      width: '100%',
      height: 100,
      backgroundImage: `url(${ bgimg })`,
    },

    title: {
      color: '#fff',
      padding: '20px 0 0 10px',
    }
  }

  return (
    <div className="App" style={ styles.page }>
     
        <div style={ styles.header }>
          <h1 style={ styles.title }>GPU Store</h1>
        </div>
        
        <hr className="my-4" />
        <ProductSection />
        <hr className="my-4" />
        <UserFormSection />
        
        <OrderSection />
        <hr className="my-4" />
        <Footer />
    </div>
  );
}

export default App;
