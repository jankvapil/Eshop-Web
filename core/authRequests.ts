import { sendRequest } from "./sendRequest"
import { User } from "./types"

///
/// Insert user into DB
///
export const createUser = async (user: User) => {
  const query = _createUser(user)
  console.log(query)
  const res = await sendRequest(query)
  return res
}

const _createUser = (user: User) => {
  return `
    mutation {
      addUser(input: {
        name: "${user.name}"
        email: "${user.email}"
        address: "${user.address}"
        password: "${user.password}"
      }) {
        user {
          id
        }
      }
    }
  `
} 


///
/// Fetch user's emails from DB
///
export const fetchUserEmails = async () => {
  const query = _fetchUserEmails()
  console.log(query)
  const res = await sendRequest(query)
  return res
}

const _fetchUserEmails = () => {
  return `
    query {
      users {
        id
        email
      }
    }
  `
} 

