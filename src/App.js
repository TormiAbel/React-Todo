import './App.css';
import React, { useState } from 'react';
import TaskView from './TaskView.js';
import Login from './Login.js';

function App() {
  let [user, setUser] = useState(null);
  const greetRndm = <p>Logi Sisse!</p>
  const greetUser = <p>Tere {user?.username}</p>
  
  return (
    <div className="App">
      <header className="App-header">
        {!user && greetRndm}
        {user && greetUser}

        {!user && <Login user={user} setUser={setUser}/>}
        {user && <TaskView user={user} setUser={setUser}/>}
      </header>
    </div>
  );
}

export default App;
