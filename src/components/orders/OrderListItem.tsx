import React from 'react'
import { UserOrders } from '../../types'

export interface OrderListItemProps {
  order: UserOrders
}

///
/// Product ListItem component
///
export const OrderListItem: 
React.FC<OrderListItemProps> = ({ order }) => {

  let prices: Array<{key: number, val: number}> = []

  order.orders.forEach(o => {
    let tmp = 0
  
    o.orderItems.forEach(oi => {
      tmp += oi.count * oi.product[0].price
    })
    prices.push({key: o.id, val: tmp})
  })

  //////////////////////////////

  const formatDate = (date: string) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`
  }
  
  //////////////////////////////

  return (
    <tr>
      <td>{ order.name }</td>
      <td>
        <table className="table table-hover">
          <tbody>
            { order.orders.map(o => (
                <tr key={ o.id }>
                  <td>{ formatDate(o.orderDate)}</td>
                </tr>
              )) }
           
          </tbody>
        </table>  
      </td>
      <td>
        <table className="table table-hover">
        <tbody>
          {
            prices.map(obj => (  
              <tr key={ obj.key }>
                <td>${ obj.val }</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </td>
    </tr>
  )
}
