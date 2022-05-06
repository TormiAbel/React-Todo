import './App.css';
import React, { useState } from 'react';

function App() {
  let [user, setUser] = useState(null);

  return (
    <div className="App">
        <button onChange={() => setUser({name: "Tormi"})}>Login</button>
        {!user && <Login />}
        {user && <ListView />}
    </div>
  );
}

export default App;