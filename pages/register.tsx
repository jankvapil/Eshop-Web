// import { useState, useEffect } from 'react'
// import { sendRequest } from 'core/sendRequest'
// import * as requests from 'core/requests'

import Layout from 'components/common/Layout'

// import ProductSection from 'components/products/ProductSection'
// import UserFormSection from 'components/userForm/UserFormSection'
// import OrderSection from 'components/orders/OrderSection'

// import { Product, UserOrders } from 'core/types'

import RegisterForm from '@/components/auth/RegisterForm'

///
/// Main Page
///
const Register = () => {
  
  /////////////////////////////

  return (
    <Layout>
        <RegisterForm />
    </Layout>
  )
}

export default Register
