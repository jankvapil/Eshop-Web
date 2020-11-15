import { useState, useEffect } from 'react'
import { sendRequest } from 'core/sendRequest'
import * as requests from 'core/requests'

import Layout from 'components/common/Layout'

import OrderSection from 'components/orders/OrderSection'

import { UserOrders } from 'core/types'


///
/// Orders Page
///
const Orders = () => {

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
    const result = sendRequest(requests.GET_ALL_ORDERS)
    result.then((res) => {
      if (res) {
        console.log(res)
        setOrders(res.users)
      }
    })
  }

  /////////////////////////////

  return (
    <Layout> 
      
      <hr className="my-4" />
      <OrderSection orders={orders} />
    </Layout>
  )
}

export default Orders
