"use client";
import React, { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList, { Task } from "@/components/TaskList";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleDeleteTask = (id: string) => {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks([...filteredTasks]);
  };

  const handleEditTask = (taskToEdit: Task) => {
    setEditingTask(taskToEdit);
  };

  const handleToggleStatus = (id: string) => {
    let taskToEditIndex = tasks.findIndex((t) => t.id === id);
    let newTasks = [...tasks];

    if (newTasks[taskToEditIndex].status === "active") {
      newTasks[taskToEditIndex].status = "completed";
    } else if (newTasks[taskToEditIndex].status === "completed") {
      newTasks[taskToEditIndex].status = "incomplete";
    } else if (newTasks[taskToEditIndex].status === "incomplete") {
      newTasks[taskToEditIndex].status = "completed";
    }

    setTasks(newTasks);
  };

  const handleAddTask = (newTask: {
    title: string;
    description?: string;
    status: "active" | "completed" | "incomplete";
  }) => {
    setTasks([...tasks, { ...newTask, id: uuidv4() }]);
    setEditingTask(null);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Task Manager</h1>
        <TaskForm
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          editingTask={editingTask}
        />
        <TaskList
          onToggleStatus={handleToggleStatus}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          tasks={tasks as unknown as Task[]}
        />
      </main>
    </div>
  );
}
