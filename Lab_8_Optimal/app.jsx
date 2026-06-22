import React, { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();

    if (name && date) {
      setTasks([
        ...tasks,
        { name, date, desc, done: false }
      ]);

      setName("");
      setDate("");
      setDesc("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.done;
    return !task.done;
  });

  return (
    <div className="app">
      <h1>Reminder App</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("notdone")}>Not Done</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={task.done ? "done" : ""}
          >
            <b>{task.name}</b> - {task.date}
            {task.desc && ` | ${task.desc}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
