import React, { useState, useEffect } from 'react'

import { sendRequest } from '../../api/sendRequest'
import * as requests from '../../api/requests'

// import { ProductListItem } from './ProductListItem'

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
const UserFormSection = () => {

  // const [products, setProducts] = useState<Product[]>([])
  // useEffect(() => {
  //   getProducts()
  //   console.log("loaded")
  // }, [])

  ///
  /// fetch products from db
  ///
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
    },

    btn: {
      marginTop: 10
    },

    form: {
      width: 500,
      margin: '20px 0 20px 10px',
    },

  }

  return (
    <section style={styles.container}>
      <header>
        <h2>Enter delivery details</h2>
      </header>

      <div style={styles.form} className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input 
          id="emailInput" 
          type="email" 
          className="form-control" 
          aria-describedby="emailHelp" 
          placeholder="Enter your email"
          style={{marginBottom: 10}}
        />
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        
        
        <label htmlFor="nameInput">Name</label>
        <input id="nameInput" type="text" className="form-control" placeholder="Enter your name" />
        
        
        <button style={styles.btn} type="submit" className="btn btn-secondary">Submit</button>
      </div>
      
      
      
    </section>
  );
}

export default UserFormSection;
