
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

///
/// Navbar component
///
export default function Navbar() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [userEmail, setUserEmail] = useState(null)

  useEffect(() => {
    if (localStorage) {
      setUserEmail(localStorage.getItem('user_email'))

      const id = localStorage.getItem('user_id')

      if (id && Number(id) % 2 == 0) {
        setIsAdmin(true)
      }
    }
  }, [])

  const router = useRouter()

  ///
  /// forget user
  ///
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_email')
    localStorage.removeItem('user_id')
    setUserEmail(null)

    router.push('/')
    setInterval(() => router.reload(), 100)
  }

  /////////////////////////////

  const logoutLi = (
    <div>
      <li style={{
          float: 'right',
          margin: '5px 0px 5px 10px',
        }
      }>
        <span style={{paddingRight: 10}}> Logged as { 
          userEmail ? userEmail : ""
        } 
        { isAdmin ? " (admin)" : ""}
        </span>
        <button 
          onClick={logout}
          style={{ 
            border: 'none',
            color: '#666',
            backgroundColor: '#fff',
            paddingLeft: 15,
            borderLeft: "1px solid #eee"
          }}
        >Logout</button>
      </li>
      
      { isAdmin ? (
          <Link href="/users">
            <li  style={{
              float: 'right',
              margin: '6px 10px 6px 10px',
            }}>
              <a href="#" style={{color: "#666", textDecoration: 'none'}}>Users</a>
            </li>
          </Link>
        ) : ""}

      <Link href="/orders">
        <li  style={{
          float: 'right',
          margin: '6px 10px 6px 10px',
        }}>
          <a href="#" style={{color: "#666", textDecoration: 'none'}}>My Orders</a>
        </li>
      </Link>
    </div>
  )

  const loginLi = (
    <Link href="/login">
      <li  style={{
        float: 'right',
        margin: '6px 10px 6px 10px',
      }}>
        <a href="#" style={{color: "#666", textDecoration: 'none'}}>Login</a>
      </li>
    </Link>
  )
  
  /////////////////////////////

  return (
    <div 
      style={{
        float: 'left',
        width: '100%',
        borderBottom: '1px solid #eee',
      }}  
    >
      <ul
        style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        <Link href="/">
          <li style={{
              float: 'left',
              margin: '6px 10px 6px 2px',
            }}
          >
            <a href="#" style={{color: "#666", textDecoration: 'none'}}>Products</a>
          </li>
        </Link>
        
       { userEmail ? logoutLi : loginLi } 
      </ul>
    </div>
  )
}


