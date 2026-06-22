import { useState } from "react";

function TodoFunction() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React To-Do List</h1>

      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task..."
      />

      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: "none" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleTask(index)}>
              {task.completed ? "✔ " : "❌ "}
              {task.text}
            </span>

            <button onClick={() => deleteTask(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoFunction;
