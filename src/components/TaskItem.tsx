import React from "react";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: "active" | "completed" | "incomplete";
}

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (taskToEdit: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleStatus,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <div className="border-white rounded-sm w-full">
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p>Status: {task.status}</p>
      <div className="flex justify-around w-full">
        <button onClick={() => onToggleStatus(task.id)}>
          {task.status === "active" ? "Mark Complete" : "Mark Incomplete"}
        </button>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        <button onClick={() => onEditTask(task)}>Edit</button>
      </div>
    </div>
  );
};

export default TaskItem;
