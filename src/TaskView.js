import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [taskName, setTaskName] = useState("");
  let [taskList, setTaskList] = useState(["t1", "t2"]);


  const handleInputName = (event) => {
    setTaskName(event.target.value)
  }

  const addTask = () => {
    setTaskList([...taskList, taskName])
  }

  const deleteTask = (index) => {
    let copy = [...taskList]
    copy.splice(index, 1)
    setTaskList(copy)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleInputName}/>
        <button onClick={addTask}>Add Task</button>
        <br/>
        <ul>
          {taskList.map((task, index) => (
          <li>{index}. {task} <button onClick={() => deleteTask(index)}>Delete Task</button> </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
