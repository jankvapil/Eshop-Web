import React from 'react'

import { ProductListItem } from './ProductListItem'
import { Product } from '../../core/types'

interface ProductSectionProps {
  products: Array<Product>
  productMap: Map<number, number>
}

///
/// Products Section component
///
const ProductSection: 
React.FC<ProductSectionProps> = ({ products, productMap }) => {

  return (
    <section style={{
      width: '100%',
    }}>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>Select Products</h2>
      </header>
      <ul>
        { 
          products.map(p => (<ProductListItem productMap={productMap} key={p.id} product={p}/>))
        }
      </ul>
    </section>
  )
}

export default ProductSection