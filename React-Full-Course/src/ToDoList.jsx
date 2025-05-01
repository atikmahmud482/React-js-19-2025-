import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {}

  function addTask() {}

  function removeTask(index) {}

  function noveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>
    </div>
  );
}

export default ToDoList;
