import React, { useState } from 'react'

interface ProductsListItemsProps {
  product: {
    id: number
    name: string
    price: number
    type: string
    description: string
    imgUrl: string
  }
}

///
/// Product ListItem component
///
export const ProductListItem: 
React.FC<ProductsListItemsProps> = ({ product }) => {

  const [cnt, setCnt] = useState(0)

  return (
    <li key={ product.id }>
      <div className="card text-black bg-white mb-3">
        <div className="card-header">
          <strong style={{fontSize: 20, float: 'left', width: 500}}>
            { product.name }
          </strong>
          <div style={{float: 'right'}}>
            <input 
              type="text" className="form-control" id="inputDefault"
              style={{width: 40, height: 30, float: 'left'}}
              value={cnt}/>
          </div>
        </div>
        <div className="card-body">
          <img 
            style={{float: 'left'}}
            src={ product.imgUrl } 
            alt={ product.name } 
            height={200}
            width={350}
          />
          <div style={{float: 'left', width: 500, marginLeft: 20}}>
            <h3>{ product.name }</h3>
            <h4>${ product.price }</h4>
            <p className="card-text">
              { product.description }
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
