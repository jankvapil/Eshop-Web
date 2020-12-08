import { useState, useEffect } from 'react'
// import useGlobal from '@/core/store'

import * as requests from 'core/requests'

import Layout from 'components/common/Layout'

import OrdersGrid from 'components/orders/OrdersGrid'
import OrderDetailPopup from 'components/orders/OrderDetailPopup'

import { UserOrders } from 'core/types'


///
/// Orders Page
///
const Orders = () => {

  // const [globalState, ] = useGlobal();
  
  const [popupVisible, setPopupVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    if (localStorage) {
      // setUserEmail(localStorage.getItem('user_email'))
      setUserId(localStorage.getItem('user_id'))
    }
  }, [])

  ///
  /// fetch orders from db when page is loaded
  ///
  const [orders, setOrders] = useState<Array<UserOrders>>([])
  useEffect(() => {
    if (userId) {
      getOrders()
      console.log("loaded")
    }
  }, [userId])

  ///
  /// fetch orders from db
  ///
  const getOrders = async () => {
    const result = await requests.getOrdersByUserId(userId)
    console.log(result)
    setOrders(result.user.orders)
  }

  /////////////////////////////

  return (
    <Layout> 
      <OrdersGrid 
        orders={orders}
        // popupVisible={popupVisible} 
        setPopupVisible={setPopupVisible}
        setSelectedOrder={setSelectedOrder}
      />
      <OrderDetailPopup 
        popupVisible={popupVisible} 
        setPopupVisible={setPopupVisible}
        selectedOrder={selectedOrder}
      />
    </Layout>
  )
}

export default Orders
