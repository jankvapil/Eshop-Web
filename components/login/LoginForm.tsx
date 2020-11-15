import { useState } from 'react'

// interface  UserFormSectionProps {
//   getOrders: Function
//   productMap: Map<number, number>
// }

// : 
// React.FC<UserFormSectionProps> 

///
/// UserForm Section component
///
const UserFormSection = () => {

  const [ name, setname ] = useState("")
  const [ password, setpassword ] = useState("")
 
  //////////////////////////////

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setname(value)
  }

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setpassword(value)
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
          <h2 style={{margin: '0 0 20px 10px'}}>Login</h2>
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
          
          <button
            onClick={() => console.log(`Login: ${name}:${password}`)}
            style={{width: 150, fontSize: 14, float: 'right'}} 
            type="submit" 
            className="btn btn-secondary"
          > Log In </button>
        </div>
      </section>
    </div>
  );
}

export default UserFormSection;
