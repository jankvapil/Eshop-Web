import { useState, useEffect } from 'react'
// import { sendRequest } from 'core/sendRequest'
// import * as requests from 'core/requests'

import Layout from 'components/common/Layout'

// import ProductSection from 'components/products/ProductSection'
// import UserFormSection from 'components/userForm/UserFormSection'
// import OrderSection from 'components/orders/OrderSection'

// import { Product, UserOrders } from 'core/types'

import LoginForm from 'components/login/LoginForm'

///
/// Main Page
///
const Login = () => {
  
  /////////////////////////////

  return (
    <Layout>
        <hr className="my-4" />
        <LoginForm />
    </Layout>
  )
}

export default Login
