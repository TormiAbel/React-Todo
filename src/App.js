import './App.css';
import React, { useState } from 'react';

function App() {
  let [user, setUser] = useState(null);
  
  
  return (
    <div className="App">
    
        {!user && <Login user={user} />}
        {user && <TaskView />}
    </div>
  );
}
