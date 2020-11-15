import React, { useState, useEffect } from 'react'
import { OrderItem, User, UserEmails } from '../../core/types'

import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'

interface  UserFormSectionProps {
  getOrders: Function
  productMap: Map<number, number>
}

///
/// UserForm Section component
///
const UserFormSection: 
React.FC<UserFormSectionProps> = ({ productMap, getOrders }) => {

  const [ name, setname ] = useState("")
  const [ email, setemail ] = useState("")
  const [ address, setaddress ] = useState("")
  
  const [ users, setusers ] = useState<Array<UserEmails>>([])

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

  ///
  /// Add user to db, returns user id 
  ///
  const addUser = async (user: User): Promise<number> => {
    const result = sendRequest(requests.ADD_USER(user))
    let retVal = await result.then((res) => {
      if (res) {
        console.log(res.addUser.user.id)
        getUsers()
        return res.addUser.user.id
      }
    })
    return Promise.resolve(retVal)
  }

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

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setname(value)
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setemail(value)
  }

  const handleAddressChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setaddress(value)
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

        // refresh orders list
        getOrders() 
      })
  }

  ///
  /// Asynchronously set order to user 
  ///
  const handleBuyProducts = () => {

    // atleast one product has to be on shopping list
    
    let flag = 0
    
    productMap.forEach((value, key) => {  
      if (value > 0) {
        flag += 1
      }
    })

    console.log(flag)

    if (flag < 1) { 
      alert("You have to chose atleast one product!")
      return
    }
    
    const foundedUser = users.find(u => u.email === email)
    if (foundedUser) {

      // use existing user
      handleBuyProducts_createOrder(foundedUser.id)
    
    } else {

      // create new user
      addUser({
        name: name,
        email: email,
        address: address
      })
      .then(userId => {
        handleBuyProducts_createOrder(userId)
      })
    }
  }
  
  //////////////////////////////

  const styles = {
    textField: {
      marginBottom: 10
    }
  }

  //////////////////////////////

  return (
    <div style={{float: 'left', width: '100%'}}>
      <section>
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
          />
          
          <button
             onClick={handleBuyProducts}
            style={{width: 150, fontSize: 14, float: 'right'}} 
            type="submit" 
            className="btn btn-secondary"
          > BUY </button>
        </div>
      </section>
    </div>
  );
}

export default UserFormSection;
