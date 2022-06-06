import "./App.css";
import React, { useState } from "react";

export default function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const userNN = (event) => {
    setUsername(event.target.value);
  };

  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const register = () => {
    const data = {username, newPassword: password}
    fetch('http://demo2.z-bit.ee/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const login = () => {
    const data = {username, password}
    fetch('http://demo2.z-bit.ee/users/get-token', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={userNN} value={username}/>
        <input onChange={passwordInput} value={password}/>
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </header>
    </div>
  );
}
