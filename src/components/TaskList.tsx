import React from "react";
import TaskItem from "./TaskItem";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "active" | "completed" | "incomplete";
}

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (taskToEdit: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleStatus,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <div className="w-full">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border-solid border-gray-200 border-2 rounded-sm p-4 mb-4"
          >
            <TaskItem
              task={task}
              onToggleStatus={onToggleStatus}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks yet!</p>}
    </div>
  );
};

export default TaskList;
