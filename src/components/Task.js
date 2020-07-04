import React from "react";
import { ReactComponent as Cancel } from "../assets/close.svg";

function Task({ task, deleteTask, toggleTask }) {
  return (
    <div>
      <li className="flex justify-between items-center mt-3">
        <div className="flex items-center">
          <input type="checkbox" onClick={() => toggleTask(task.id)} />
          <div
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
            className="capitalize ml-3 text-sm font-semibold"
          >
            {task.title}
          </div>
        </div>
        <div>
          <button onClick={() => deleteTask(task.id)}>
            <Cancel className="w-4 h-4 text-gray-600 fill-current mx-2" />
          </button>
        </div>
      </li>
    </div>
  );
}
export default Task;
