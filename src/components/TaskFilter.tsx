import React from "react";

interface TaskFilterProps {
  onFilterChange: (status: "all" | "active" | "completed") => void;
  currentFilter: "all" | "active" | "completed";
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  onFilterChange,
  currentFilter,
}) => {
  return (
    <div>
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("active")}>Active</button>
      <button onClick={() => onFilterChange("completed")}>Completed</button>
    </div>
  );
};

export default TaskFilter;
