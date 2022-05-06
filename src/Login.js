import './App.css';
import React, { useState } from 'react';

export default function Login() {
  let [username, setUsername] = useState(null);
  let [password, setPassword] = useState(null);
  const secretKey = "pass"
  
  const userNN = nn => {
    setUsername(nn.event.value)
  }
  
  const passwordInput = pw => {
    setPassword(pw.event.value)
  }
  
  const checkStats = () => {
    if (password === secretkey) {
    setUser(username)
    }
  }
  
  return (
    <div className="App">
    <header className="App-header">
        <input onChange={userNN}/>
        <input onChange={passwordInput}/>
        <button onClick={checkStats}/>
    </header>
    </div>
  );
}
