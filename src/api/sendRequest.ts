import axios from 'axios'

const GRAPHQL_API = "http://localhost:5000/graphql"

export const sendRequest = async (query: string) => {
  console.log(`Sending query: `)
  console.log(query)

  try {
    const queryResult = await axios.post(
      GRAPHQL_API,
      {
        headers: {"Access-Control-Allow-Origin": '*'},
        query: query
      }
    )
  
    return queryResult.data.data
  
  } catch (error) {
    console.error(error)
    return null
  }
}