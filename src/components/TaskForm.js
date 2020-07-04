import React from "react";

function TaskForm({ input, addTask, onInputChange }) {
  return (
    <form onSubmit={addTask}>
      <div className="flex items-center text-sm mt-2">
        <span>Add task</span>
      </div>
      <input
        type="text"
        placeholder="write your task and hit Enter"
        className="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4"
        onChange={onInputChange}
        value={input}
      />
    </form>
  );
}
export default TaskForm;
