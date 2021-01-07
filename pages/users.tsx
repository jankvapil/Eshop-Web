import { useState, useEffect } from 'react'

import * as requests from 'core/requests'

import Layout from 'components/common/Layout'
import UsersGrid from 'components/users/UsersGrid'

///
/// Orders Page
///
const Orders = () => {

  ///
  /// fetch orders from db when page is loaded
  ///
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  ///
  /// fetch orders from db
  ///
  const loadUsers = async () => {
    const result = await requests.fetchUsers()
    setUsers(result)
  }

  /////////////////////////////

  return (
    <Layout>
      <UsersGrid 
        users={users}
      />
    </Layout>
  )
}

export default Orders
