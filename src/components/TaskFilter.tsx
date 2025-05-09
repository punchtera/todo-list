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
    <div className="w-full flex justify-around">
      <button
        className={`${currentFilter === "all" ? "font-bold" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={`${currentFilter === "active" ? "font-bold" : ""}`}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>
      <button
        className={`${currentFilter === "completed" ? "font-bold" : ""}`}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
