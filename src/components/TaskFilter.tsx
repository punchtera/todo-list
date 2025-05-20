import { FilterStatus } from "@/enums/FilterStatus";
import React from "react";

interface TaskFilterProps {
  onFilterChange: (status: FilterStatus) => void;
  currentFilter: FilterStatus;
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  onFilterChange,
  currentFilter,
}) => {
  return (
    <div className="w-full flex justify-around">
      <button
        className={`${currentFilter === "all" ? "font-bold" : ""}`}
        onClick={() => onFilterChange(FilterStatus.ALL)}
      >
        All
      </button>
      <button
        className={`${currentFilter === "active" ? "font-bold" : ""}`}
        onClick={() => onFilterChange(FilterStatus.ACTIVE)}
      >
        Active
      </button>
      <button
        className={`${currentFilter === "completed" ? "font-bold" : ""}`}
        onClick={() => onFilterChange(FilterStatus.COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
