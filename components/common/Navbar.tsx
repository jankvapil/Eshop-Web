
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {

  const router = useRouter()

  const [user, setUser] = useState({id: null, email: null})

  useEffect(() => {
    console.log("TOKEN")
    
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
    console.log(token)

    if (localStorage) {
      setUser({
        id: localStorage.getItem('user_id'),
        email: localStorage.getItem('user_email')
      })
    }

  }, [])


  ///
  /// forget user
  ///
  const logout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_email')
    localStorage.removeItem('token')
    router.reload()
  }

  /////////////////////////////

  return (
    <div style={{
      outline: '1px solid red'
    }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">Products</a>
        </Link>

        <Link href="/orders">
          <a className="navbar-brand">Orders</a>
        </Link>


          <div style={{float: 'right'}}>

            <Link href="/login">
              <a className="navbar-brand" >Login</a>
            </Link>
          </div>
      </nav>

      <div style={{
        float: 'right'
      }}>
        <span> { user.email } </span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
