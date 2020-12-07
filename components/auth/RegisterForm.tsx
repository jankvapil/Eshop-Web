import { createUser, fetchUserEmails } from '@/core/authRequests'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

// interface  UserFormSectionProps {
//   getOrders: Function
//   productMap: Map<number, number>
// }

// : 
// React.FC<UserFormSectionProps> 

///
/// UserForm Section component
///
const RegisterForm = () => {

  const router = useRouter()

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ address, setAddress ] = useState("")
 
  const [ users, setUsers ] = useState([])

  //////////////////////////////

  useEffect(() => {
    loadUserEmails()
  }, [])

  const loadUserEmails = async () => {
    const res = await fetchUserEmails()
    setUsers(res.users)
    console.log(res)
  }

  //////////////////////////////

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setName(value)
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setEmail(value)
  }
  
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setPassword(value)
  }
  
  const handleAddressChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setAddress(value)
  }

  ///
  /// Register form validation
  ///
  const validateForm = () => {

    // TODO: make better validation ^^
    if (name.length < 3 ||
        password.length < 3 ||
        email.length < 3 ||
        address.length < 3
    ) { 
      alert("You have to set real values!")
      return false
    }

    const exists = users.map(u => u.email).includes(email)
    return exists
  }

  const handleOnClick = async () => {
    console.log(`Register: ${name}:${password}:${email}:${address}`)

    if (validateForm()) {
      alert("User already exists!")
    } else {
      // const salt = bcrypt.genSaltSync(10)
      // const hashedPass = bcrypt.hashSync(password, salt)
      const res = await createUser({
        name: name,
        password: password,
        email: email,
        address: address
      })

      if (res) {
        router.push('/')
      } else {
        alert("Something wrong has happend!")
      }
    }
  }
 
  //////////////////////////////

  const styles = {
    textField: {
      marginBottom: 10
    }
  }

  //////////////////////////////

  return (
    <div style={{float: 'left', width: '100%'}}>
      <section>
        <header>
          <h2 style={{margin: '0 0 20px 10px'}}>Register</h2>
        </header>

        <div 
          style={{ width: 500, margin: 'auto' }} 
          className="form-group"
        >
          <label htmlFor="nameInput">Username</label>
          <input 
            id="nameInput" 
            type="text" 
            className="form-control" 
            placeholder="Enter your username"
            style={styles.textField} 
            onChange={handleNameChange}
          />

          <label htmlFor="emailInput">Email</label>
          <input 
            id="emailInput" 
            type="text" 
            className="form-control" 
            placeholder="Enter your email"
            style={styles.textField} 
            onChange={handleEmailChange}
          />
          
          <label htmlFor="passwordInput">Password</label>
          <input 
            id="passwordInput" 
            type="password" 
            className="form-control" 
            aria-describedby="passwordHelp" 
            placeholder="Enter your password"
            style={styles.textField}
            onChange={handlePasswordChange} 
          />

          <label htmlFor="addressInput">Address</label>
          <input 
            id="addressInput" 
            type="address" 
            className="form-control" 
            aria-describedby="addressHelp" 
            placeholder="Enter your address"
            style={styles.textField}
            onChange={handleAddressChange} 
          />
          
          
          <button
            onClick={handleOnClick}
            style={{width: 150, fontSize: 14, float: 'right'}} 
            type="submit" 
            className="btn btn-secondary"
          > Register </button>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;
