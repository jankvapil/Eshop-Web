// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

// export type User = {
//   id: number
//   name: string
// }

export type Product = {
  id: number
  name: string
  price: number
  type: string
  description: string
  imgUrl: string
}

export type UserEmails = {
  id: number
  email: string
}

export type User = {
  id?: number
  name: string
  email?: string
  address?: string
  password?: string
}

export type OrderItem = {
  orderId: number
  productId: number
  count: number
}

export type UserOrders = {
  name: string
  orders: Array<{
    id: number
    orderDate: string
    orderItems: Array<{
      count: number
      product: Array<
      {
        name: string
        price: number
      }>
    }>
  }>
}
