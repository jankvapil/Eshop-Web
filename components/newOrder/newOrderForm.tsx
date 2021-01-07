
import { OrderItem } from '../../core/types'
import { useRouter } from 'next/router'

import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'

interface NewOrderFormProps {
  productMap: Map<number, number>
  userId: number
}

///
/// UserForm Section component
///
const NewOrderForm: 
React.FC<NewOrderFormProps> = ({ productMap, userId }) => {
  
  const router = useRouter()

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
              id: orderId,
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

    // atleast one product has to be on shopping list
    let flag = 0
    
    productMap.forEach((value, ) => {  
      if (value > 0) {
        flag += 1
      }
    })

    if (flag < 1) { 
      alert("You have to chose atleast one product!")
      return
    } else {
  
      handleBuyProducts_createOrder(userId)
    }
  }

  //////////////////////////////

  return (
    <div style={{float: 'left', width: '100%'}}>
      <button
          onClick={handleBuyProducts}
        style={{width: 150, fontSize: 14, float: 'right'}} 
        type="submit" 
        className="btn btn-secondary"
      > BUY </button>
    </div>
  );
}

export default NewOrderForm
