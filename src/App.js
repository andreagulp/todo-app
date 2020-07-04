import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const initialState = [
  {
    id: "1",
    title: "Buy Milk",
    completed: false,
  },
  {
    id: "2",
    title: "Run 20Km",
    completed: false,
  },
];

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(initialState);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="bg-gray-200 text-gray-800 flex items-center justify-center h-screen">
      <div className="container px-3 max-w-md mx-auto">
        <div className="bg-white rounded shadow px-4 py-4">
          <div className="title font-bold text-lg">Todo Application</div>
          <TaskForm
            input={input}
            addTask={addTask}
            onInputChange={onInputChange}
          />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
