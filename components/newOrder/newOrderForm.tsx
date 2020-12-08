import React, { useState, useEffect } from 'react'
import { OrderItem, UserEmails } from '../../core/types'
import useGlobal from '../../core/store'
import { useRouter } from 'next/router'

import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'

interface  NewOrderFormProps {
  // getOrders: Function
  productMap: Map<number, number>
}

///
/// UserForm Section component
///
const NewOrderForm: 
React.FC<NewOrderFormProps> = ({ productMap }) => {
  
  const router = useRouter()
  const [globalState, ] = useGlobal();
  const [ , setusers ] = useState<Array<UserEmails>>([])

  ///
  /// fetch users from db when page is loaded
  ///
  useEffect(() => {
    getUsers()
  }, [])

  //////////////////////////////

  ///
  /// fetch users from db
  ///
  const getUsers = async () => {
    const result = sendRequest(requests.GET_ALL_USER_EMAILS)
    result.then((res) => {
      if (res) {
        setusers(res.users)
      }
    })
  }

  // ///
  // /// Add user to db, returns user id 
  // ///
  // const addUser = async (user: User): Promise<number> => {
  //   const result = sendRequest(requests.ADD_USER(user))
  //   let retVal = await result.then((res) => {
  //     if (res) {
  //       console.log(res.addUser.user.id)
  //       getUsers()
  //       return res.addUser.user.id
  //     }
  //   })
  //   return Promise.resolve(retVal)
  // }

  ///
  /// Add order to db, returns order id 
  ///
  const createOrder = async (): Promise<number> => {
    const result = sendRequest(requests.ADD_ORDER)
    let retVal = await result.then((res) => {
      if (res) {
        return res.addOrder.order.id
      }
    })
    return Promise.resolve(retVal)
  }

  ///
  /// Set order to user
  ///
  const setOrderToCustomer = async (
    orderId: number, 
    userId: number
  ): Promise<number> => {

    const result = sendRequest(requests.ADD_ORDER_TO_CUSTOMER(orderId, userId))
    let retVal = await result.then((res) => {
      if (res) {
        return res.addUsersOrder.user.id
      }
    })
    return Promise.resolve(retVal)
  }

  ///
  /// Create orderItem 
  ///
  const createOrderItem = async (
    orderItem: OrderItem
  ): Promise<number> => {

    const result = sendRequest(requests.CREATE_ORDER_ITEM(orderItem))
    let retVal = await result.then((res) => {
      if (res) {
        return res.addOrderItem.orderItem.id
      }
    })
    return Promise.resolve(retVal)
  }

  //////////////////////////////

  ///
  /// Asynchronously set order to user 
  ///
  const handleBuyProducts_createOrder = (userId: number) => {
    
    createOrder()
      .then(async orderId => {
        await setOrderToCustomer(orderId, userId)
        return orderId
      })
      .then(orderId => {

        // for each product in "shopping card" create orderItem
        productMap.forEach((value, key) => {
          if (value > 0) {
            createOrderItem({
              orderId: orderId,
              productId: key,
              count: value
            })
          }
        })
      })
      .then(() => {
        alert("order was created!")
        router.push('/orders')
      })
  }

  ///
  /// Asynchronously set order to user 
  ///
  const handleBuyProducts = () => {

    console.log(productMap)
    console.log(globalState.user)
    // atleast one product has to be on shopping list
    
    let flag = 0
    
    productMap.forEach((value, ) => {  
      if (value > 0) {
        flag += 1
      }
    })

    console.log(flag)

    if (flag < 1) { 
      alert("You have to chose atleast one product!")
      return
    } else {
  
      handleBuyProducts_createOrder(globalState.user.id)
    }
  }

  //////////////////////////////

  return (
    <div style={{float: 'left', width: '100%'}}>
      {/* <section>
        <header>
          <h2 style={{margin: '0 0 20px 10px'}}>Delivery Details</h2>
        </header>

        <div 
          style={{ width: 500, margin: 'auto' }} 
          className="form-group"
        >
          <label htmlFor="nameInput">Name</label>
          <input 
            id="nameInput" 
            type="text" 
            className="form-control" 
            placeholder="Enter your name"
            style={styles.textField} 
            onChange={handleNameChange}
          />
          
          <label htmlFor="emailInput">Email</label>
          <input 
            id="emailInput" 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="Enter your email"
            style={styles.textField}
            onChange={handleEmailChange} 
          />

          <label htmlFor="addressInput">Address</label>
          <input 
            id="addressInput" 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="Enter your address"
            style={styles.textField} 
            onChange={handleAddressChange}
          /> */}
          
          <button
             onClick={handleBuyProducts}
            style={{width: 150, fontSize: 14, float: 'right'}} 
            type="submit" 
            className="btn btn-secondary"
          > BUY </button>

        {/* </div>
      </section> */}
    </div>
  );
}

export default NewOrderForm;
