import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskItem from "./TaskItem";
import { Task } from "./TaskList";

const mockOnToggleStatus = jest.fn();
const mockOnDeleteTask = jest.fn();
const mockOnEditTask = jest.fn();

const testTask: Task = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  status: "active",
};

describe("TaskItem Component", () => {
  beforeEach(() => {
    mockOnToggleStatus.mockClear();
    mockOnDeleteTask.mockClear();
    mockOnEditTask.mockClear();
  });
  it("renders the task, the description and the status", () => {
    render(
      <TaskItem
        task={testTask}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Status: active")).toBeInTheDocument();
  });

  it('renders "Mark Complete" button when status is "active"', () => {
    render(
      <TaskItem
        task={testTask}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    expect(
      screen.getByRole("button", { name: "Mark Complete" })
    ).toBeInTheDocument();
  });

  it('renders "Mark Incomplete" button when status is "completed"', () => {
    render(
      <TaskItem
        task={{ ...testTask, status: "completed" }}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    expect(
      screen.getByRole("button", { name: "Mark Incomplete" })
    ).toBeInTheDocument();
  });

  it("calls onToggleStatus with task ID when the status button is clicked", () => {
    render(
      <TaskItem
        task={testTask}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    const statusButton = screen.getByRole("button", { name: "Mark Complete" });
    fireEvent.click(statusButton);
    expect(mockOnToggleStatus).toHaveBeenCalledTimes(1);
    expect(mockOnToggleStatus).toHaveBeenCalledWith("1");
  });

  it("calls onDeleteTask with task ID when the delete button is clicked", () => {
    render(
      <TaskItem
        task={testTask}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);
    expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockOnDeleteTask).toHaveBeenCalledWith("1");
  });

  it("calls onEditTask with the task object when the edit button is clicked", () => {
    render(
      <TaskItem
        task={testTask}
        onToggleStatus={mockOnToggleStatus}
        onDeleteTask={mockOnDeleteTask}
        onEditTask={mockOnEditTask}
      />
    );
    const editButton = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(editButton);
    expect(mockOnEditTask).toHaveBeenCalledTimes(1);
    expect(mockOnEditTask).toHaveBeenCalledWith(testTask);
  });
});
