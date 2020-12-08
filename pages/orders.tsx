import { useState, useEffect } from 'react'
import useGlobal from '@/core/store'

import * as requests from 'core/requests'

import Layout from 'components/common/Layout'

import OrdersGrid from 'components/orders/OrdersGrid'

import { UserOrders } from 'core/types'


///
/// Orders Page
///
const Orders = () => {

  const [globalState, ] = useGlobal();
  
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
    
    if (globalState.user.id) {
      const result = await requests.getOrdersByUserId(globalState.user.id)
      console.log(result)
      setOrders(result.user.orders)
    }
   
    // const result = sendRequest(requests.GET_ALL_ORDERS)
    // result.then((res) => {
    //   if (res) {
    //     console.log(res)
    //     setOrders(res.users)
    //   }
    // })
  }

  /////////////////////////////

  return (
    <Layout> 
      {/* <OrderSection orders={orders} /> */}
      <OrdersGrid orders={orders}/>
    </Layout>
  )
}

export default Orders
