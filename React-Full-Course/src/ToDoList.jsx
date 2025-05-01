import React, { useState } from "react";
import { CgLayoutGrid } from "react-icons/cg";

function ToDoList() {
  const [tasks, setTask] = useState([
    "Eat Breakfast",
    "Go to Gym",
    "Study React",
  ]);
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
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>↑</button>
            <button onClick={() => moveTaskDown(index)}>↓</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
