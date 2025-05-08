import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskList, { Task } from "./TaskList";

const mockTasks: Task[] = [
  { id: "1", title: "Task 1", status: "active" },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    status: "completed",
  },
];

const mockOnToggleStatus = jest.fn();
const mockOnDeleteTask = jest.fn();
const mockOnEditTask = jest.fn();

describe("TaskList Component", () => {
  beforeEach(() => {
    mockOnToggleStatus.mockClear();
    mockOnDeleteTask.mockClear();
    mockOnEditTask.mockClear();
  });

  it('renders "No tasks yet!" message when the tasks array is empty', () => {
    render(
      <TaskList
        tasks={[]}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    expect(screen.getByText("No tasks yet!")).toBeInTheDocument();
  });

  it("renders a TaskItem for each task in the tasks array", () => {
    render(
      <TaskList
        tasks={mockTasks}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });
});
