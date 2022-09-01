import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  return (
    <div id="main">
      <h1>Relatives List</h1>
      <center>
        
          <input
            type="text"
            name="task"
            value={task}
            onChange={changeHandler}
          />
          <button value="Add" onClick={submitHandler}>Add to list</button>
        
        <div>
          {todos.map((task,index) => (
            <h3 key={index}>{index+1}.{task}</h3>
          ))}
        </div>
      </center>
    </div>
  );
};

export default App;
