import { sendRequest } from "./sendRequest"
import { OrderItem, User } from "./types"

const getNowDate = () => {
  const dt = new Date()
  const now = `${dt
    .getFullYear().toString().padStart(4, "0")}-${(dt
    .getMonth()+ 1).toString().padStart(2, "0")}-${dt
    .getDate().toString().padStart(2, "0")} ${dt
    .getHours().toString().padStart(2, "0")}:${dt
    .getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds().toString().padStart(2, "0")}.0`

  return now
}

///
/// Get all user orders
///
export const getOrdersByUserId = async (id) => {
  const query = _getOrdersByUserId(id)
  const res = await sendRequest(query)

  if (res.user) {
    for (let o of res.user.orders) {
      let totalPrice = 0
      for (let oi of o.orderItems) {
        totalPrice += oi.count * oi.product[0].price
       }
      o.totalPrice = totalPrice
    }
  }

  return res
}

export const _getOrdersByUserId = (id) => {
  return `
    query {
      user(id: ${id}) {
        name
        orders {
          id
          orderDate
          orderItems {
            product {
              name
              price
            }
            count
          }
        }
      }
    }
  `
}

/////////////////////////////////

export const GET_ALL_ORDERS: string = `
  query {
    users {
      name
      orders {
        id
        orderDate
        orderItems {
          product {
            name
            price
          }
          count
        }
      }
    }
  }
`

export const GET_ALL_PRODUCTS: string = `
  query {
    products {
      id
      name
      price
      type
      description
      imgUrl
    }
  }
`

export const GET_ALL_USER_EMAILS: string = `
  query {
    users {
      id
      email
    }
  }
`

export const ADD_ORDER: string = `
  mutation {
    addOrder(input: {
      orderDate: "${getNowDate()}"
    }) {
      order {
        id
      }
    }
  }
`

export const ADD_USER = (user: User): string => {
  return `
    mutation {
      addUser(input: {
        name: "${user.name}"
        email: "${user.email}"
        address: "${user.address}"
      }) {
        user {
          id
        }
      }
    }
  `
}

export const ADD_ORDER_TO_CUSTOMER = (orderId: number, userId: number): string => {
  return `
    mutation AddUsersOrder {
      addUsersOrder(input: {
        userId: ${userId}
        orderIds: [${orderId}]
      }) {
        user {
          id
        }
      }
    }
  `
} 

export const CREATE_ORDER_ITEM = (
  orderItem: OrderItem
): string => {
  return `
    mutation {
      addOrderItem(input: {
        orderId: ${orderItem.orderId}
        productId: ${orderItem.productId}
        count: ${orderItem.count}
      }) {
        orderItem {
          id
        }
      }
    }
  `
} 



