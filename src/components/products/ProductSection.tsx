import React, { useState, useEffect } from 'react'

import { sendRequest } from '../../api/sendRequest'
import * as requests from '../../api/requests'

import { ProductListItem } from './ProductListItem'

type Product = {
  id: number;
  name: string;
  price: number;
  type: string;
  description: string;
  imgUrl: string;
}

///
/// Products Section component
///
const ProductSection = () => {

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
      }
    })
  }

  /////////////////////////////

  return (
    <section style={{
      width: '100%',
    }}>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>Select Products</h2>
      </header>
      <ul>
        { 
          products.map(p => (<ProductListItem key={p.id} product={p}/>))
        }
      </ul>
    </section>
  );
}

export default ProductSection;
