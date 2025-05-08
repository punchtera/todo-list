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
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
      {tasks.length === 0 && <p>No tasks yet!</p>}
    </div>
  );
};

export default TaskList;
