import { useState, useEffect } from 'react'
import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'

// import bgimg from 'static/images/bgimg'


// import Link from 'next/link'
// import Layout from '../components/Layout'

import ProductSection from 'components/products/ProductSection'
import UserFormSection from 'components/userForm/UserFormSection'
import OrderSection from 'components/orders/OrderSection'
import Footer from 'components/Footer'
import { Product, UserOrders } from 'core/types'


///
/// Main Page
///
const App = () => {
  
  ///
  /// set responsible height every time window resizes
  ///
  // const [height, setHeight] = useState(window.innerHeight)
  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.innerHeight)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // })

  ///
  /// fetch orders from db when page is loaded
  ///
  const [orders, setOrders] = useState<Array<UserOrders>>([])
  useEffect(() => {
    getOrders()
    console.log("loaded")
  }, [])

  ///
  /// fetch orders from db
  ///
  const getOrders = async () => {
    const result = sendRequest(requests.GET_ALL_ORDERS)
    result.then((res) => {
      if (res) {
        console.log(res)
        setOrders(res.users)
      }
    })
  }

  ///
  /// fetch products from db when page is loaded
  ///
  const [productMap, setProductMap] = useState(new Map())
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts()
    console.log("loaded")
  }, [])

  ///
  /// fetch products from db
  ///
  const getProducts = async () => {
    const result = sendRequest(requests.GET_ALL_PRODUCTS)
    result.then((res) => {
      if (res) {
        setProducts(res.products)
        initMapOfProducts(res.products)
      }
    })
  }

  ///
  /// creates map with productId and count
  ///
  const initMapOfProducts = (products: Product[]) => {
    const map = new Map()
    products.forEach(p => {
      map.set(p.id, 0)   
    })
    setProductMap(map)
  }

  /////////////////////////////

  const styles = {
    page: {
      margin: 'auto',
      width: 1000,
      // minHeight: height + 200, 
      // outline: 'red solid 1px',
    },

    header: {
      display: 'block',
      width: '100%',
      height: 100,
      backgroundImage: `url('./bgimg.jpeg')`,
    },

    title: {
      color: '#fff',
      padding: '20px 0 0 10px',
    }
  }

  /////////////////////////////

  return (
    <div className="App" style={ styles.page }>
     
        <div style={ styles.header }>
          <h1 style={ styles.title }>GPU Store</h1>
        </div>
        
        <hr className="my-4" />
        <ProductSection products={products} productMap={productMap} />
        <hr className="my-4" />
        <UserFormSection 
          productMap={productMap} 
          getOrders={getOrders}
        />
        
        <OrderSection orders={orders} />
        <hr className="my-4" />
        <Footer />
    </div>
  );
}

export default App
