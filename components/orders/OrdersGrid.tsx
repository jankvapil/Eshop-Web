import React from 'react'

///
/// Footer component
///
const OrdersGrid = ({
  orders
}) => {

  return (
    <div>
      <button onClick={() => console.log(orders)}> orders </button>
    </div>
  )
}

export default OrdersGrid
