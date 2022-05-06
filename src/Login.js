import './App.css';
import React, { useState } from 'react';

export default function Login() {
  let [username, setUsername] = useState(null);
  let [password, setpassword] = useState(null);
  
  const userNN = (event) => {
    setUsername(event.target.value)
  }
  
  
  return (
    <div className="App">
        <button onChange={() => setUser({name: "Tormi"})}>Login</button>
        {!user && <Login />}
        {user && <ListView />}
    </div>
  );
}
