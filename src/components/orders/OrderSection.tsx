import React, { useState, useEffect } from 'react'

import { sendRequest } from '../../api/sendRequest'
import * as requests from '../../api/requests'

import { ProductListItem } from './ProductListItem'

type Product = {
  id: number
  name: string
  price: number
  type: string
  description: string
  imgUrl: string
}

///
/// Products Section component
///
const OrderSection = () => {

  // const [products, setProducts] = useState<Product[]>([])
  // useEffect(() => {
  //   getProducts()
  //   console.log("loaded")
  // }, [])

  // ///
  // /// fetch products from db
  // ///
  // const getProducts = async () => {
  //   const result = sendRequest(requests.GET_ALL_PRODUCTS)
  //   result.then((res) => {
  //     if (res) {
  //       setProducts(res.products)
  //     }
  //   })
  // }

  //////////////////////////////

  const styles = {
    container: {
      width: '100%'
    }
  }

  return (
    <section style={styles.container}>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>Orders</h2>
      </header>
      
    </section>
  );
}

export default OrderSection
