import React, { useState, useEffect } from 'react'

///
/// UserForm Section component
///
const UserFormSection = () => {

  //////////////////////////////

  const styles = {
    form: {
      width: 500,
      margin: 'auto',
      // margin: '20px 0 20px 10px',
    },

    textField: {
      marginBottom: 10
    }
  }

  return (
    <div style={{float: 'left', width: '100%'}}>
      <section>
        <header>
          <h2 style={{margin: '0 0 20px 10px'}}>Delivery Details</h2>
        </header>

        <div style={styles.form} className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input 
            id="nameInput" 
            type="text" 
            className="form-control" 
            placeholder="Enter your name"
            style={styles.textField} 
          />
          
          <label htmlFor="emailInput">Email</label>
          <input 
            id="emailInput" 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="Enter your email"
            style={styles.textField} 
          />

          <label htmlFor="addressInput">Address</label>
          <input 
            id="addressInput" 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="Enter your address"
            style={styles.textField} 
          />
          
          <button style={{width: 150, fontSize: 14, float: 'right'}} type="submit" className="btn btn-secondary">BUY</button>
        </div>
      </section>
    </div>
  );
}

export default UserFormSection;
