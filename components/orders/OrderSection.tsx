import React from 'react'

import { OrderListItem } from './OrderListItem'
import { UserOrders } from '../../core/types'

interface OrderSectionProps {
  orders: Array<UserOrders>
}

///
/// Products Section component
///
const OrderSection: 
React.FC<OrderSectionProps> = ({ orders }) => {

  //////////////////////////////

  const styles = {
    container: {
      width: '100%'
    }
  }

  //////////////////////////////

  return (
    <section style={styles.container}>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>Orders</h2>
      </header>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"><strong>User</strong></th>
            <th scope="col"><strong>Order Date</strong></th>
            <th scope="col"><strong>Total Price</strong></th>
          </tr>
        </thead>
        <tbody>
          { 
            orders.map(o => (
              <OrderListItem key={o.name} order={o} />
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default OrderSection
