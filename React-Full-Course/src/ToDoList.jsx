import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function noveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="todo-list">
      <h2>To-Do-List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => {
          <li key={index}>
            <span className="text"> {task}</span>
            <button className="delete-Button" onClick={() => deleteTask(index)}>
              Delete Button
            </button>
            <button className="delete-Button" onClick={() => deleteTask(index)}>
              Delete Button
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
