import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul className="todo-list mt-4">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        );
      })}
    </ul>
  );
}
export default TaskList;
