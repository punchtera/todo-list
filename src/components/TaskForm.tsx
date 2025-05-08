"use client";
import React, { useState, useEffect } from "react";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: "active" | "completed" | "incomplete";
}

interface TaskFormProps {
  onAddTask: (newTask: Omit<Task, "id">) => void;
  onUpdateTask: (updatedTask: Task) => void;
  editingTask: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAddTask,
  onUpdateTask,
  editingTask,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        onUpdateTask({
          ...editingTask,
          title: title.trim(),
          description: description.trim(),
        });
      } else {
        onAddTask({
          title: title.trim(),
          description: description.trim(),
          status: "active",
        });
      }
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-solid border-gray-200 border-2 rounded-sm p-4 flex flex-col"
    >
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
