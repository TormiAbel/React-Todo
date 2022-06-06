import './App.css';
import React, { useState } from 'react';

export default function TaskView({user, setUser}) {
  let [taskName, setTaskName] = useState("");
  let [tasks, setTasks] = useState([]);
  let [checked, setChecked] = useState();


  var extraGetInfo = {
    method: "GET",
    Credential: "include",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + user.access_token,
    },
  };
  var sendTaskToApi = {  
    method: 'POST',
    Credential: "include",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + user.access_token,
    },
   body: JSON.stringify({ 
     "title": taskName,
     "desc": ""
  })
  }
  var sendDelete = {  
    method: 'DELETE',
    Credential: "include",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + user.access_token,
    },
   body: JSON.stringify({ 
     "title": taskName,
     "desc": ""
  })
  }
  var updateInfo = {  
    method: 'PUT',
    Credential: "include",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + user.access_token,
    },
   body: JSON.stringify({ 
     "marked_as_done": checked
  })
  }

  

  useEffect(() => {fetch("http://demo2.z-bit.ee/tasks", extraGetInfo)
  .then((res) => res.json())
  .then((result) => {
    setTasks(result);
  })});

  
  const eventHandler = (event) => {
    setTaskName(event.target.value);
  };
  const updateStatus = (task) => {
    console.log(task.marked_as_done)
    setChecked(!task.marked_as_done);
    console.log("checked", checked)
    let id =(task.id)
    fetch("http://demo2.z-bit.ee/tasks/"+id, updateInfo)
      .then((res) => res.json())
      .then((result) => {
        console.log("tasks", tasks)
        setTasks(tasks);
      });
  };

  const addTask = () => {
    console.log(taskName)
    fetch("http://demo2.z-bit.ee/tasks", sendTaskToApi)
      .then((res) => res.json())
      .then((result) => {
        let copy = [...tasks, result];
        console.log("copy", copy)
        setTasks(copy);
      });
  };

  const deleteTask = (task) => {
    let id = (task.id)
    fetch("http://demo2.z-bit.ee/tasks/"+id, sendDelete)
      .then((res) => res.json())
      .then((result) => {
        let copy = [...tasks];
        copy.splice(task, 1);
        setTasks(copy);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={eventHandler} />
        <button onClick={addTask}> Add task</button>
        <br />
        Sul on vaja teha veel asjad:
        <ul>
          {tasks.map((task, index) => (
            <li>
              <input
          type="checkbox"
          checked={task.marked_as_done}
          onChange={() => updateStatus(task)}
        />
              {" "}
              {index}. {task.title}{" "}
              <button onClick={() => deleteTask(task)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
