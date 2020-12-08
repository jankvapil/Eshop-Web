
import Link from 'next/link'
import { useRouter } from 'next/router'

import useGlobal from '../../core/store'

///
/// Navbar component
///
export default function Navbar() {

  const [globalState, globalActions] = useGlobal();
  const router = useRouter()

  ///
  /// forget user
  ///
  const logout = () => {
    globalActions.setUser({
      id: undefined,
      email: undefined
    })
    localStorage.removeItem('token')
    router.reload()
  }

  /////////////////////////////


  const logoutLi = (
    <div>
      <li style={{
          float: 'right',
          margin: '5px 0px 5px 10px',
        }
      }>
        <span style={{paddingRight: 10}}> Logged as { globalState.user.email } </span>
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
            <a href="#" style={{color: "#666", textDecoration: 'none'}}>Home</a>
          </li>
        </Link>
        
       { globalState.isLogged ? logoutLi: loginLi } 

      </ul>
    </div>
  )
}


