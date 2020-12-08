import { useState, useEffect } from 'react'
import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'
// import useGlobal from '../core/store'

import Layout from 'components/common/Layout'

import ProductSection from 'components/products/ProductSection'
// import UserFormSection from 'components/userForm/UserFormSection'

import { Product } from 'core/types'
import NewOrderForm from '@/components/newOrder/newOrderForm'


///
/// Main Page
///
const App = () => {

  // const [globalState, ] = useGlobal()

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    if (localStorage) {
      setUserId(localStorage.getItem('user_id'))
    }
  }, [])

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

  return (
      <Layout>
        <ProductSection products={products} productMap={productMap} />      
        { userId ? (<NewOrderForm userId={userId} productMap={productMap} />): "" } 
    </Layout>
  )
}

export default App
