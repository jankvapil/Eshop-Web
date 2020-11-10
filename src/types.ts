import { type } from "os"

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
  name: string
  email: string
  address: string
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
