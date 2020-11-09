import React from 'react'
import { query } from './api/query'

import './App.css';

function App() {

  const getUsers = () => {
    const result = query(`
      query {
        users {
          id
          name
          email
        }
      }
    `)

    result.then((res) => {
      if (res) {
        console.log(res)
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>click</button>
      </header>
    </div>
  );
}

export default App;
