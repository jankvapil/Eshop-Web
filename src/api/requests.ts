
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