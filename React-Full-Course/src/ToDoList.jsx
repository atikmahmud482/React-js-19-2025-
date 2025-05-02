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

  function addTask() {
    if (newTask.trim() === "") return;
    setTask((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    setTask((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h2>To-Do-List</h2>

      <div className="input-container">
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
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ↑
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
