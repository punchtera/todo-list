import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";
import { Task } from "./TaskList";

const mockOnAddTask = jest.fn();
const mockOnUpdateTask = jest.fn();

const editingTestTask: Task = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  status: "active",
};

describe("TaskForm Component", () => {
  beforeEach(() => {
    mockOnAddTask.mockClear();
    mockOnUpdateTask.mockClear();
  });

  it("renders the task form to edit", () => {
    render(
      <TaskForm
        onAddTask={mockOnAddTask}
        onUpdateTask={mockOnUpdateTask}
        editingTask={editingTestTask}
      />
    );
    expect(screen.getByText("Edit Task")).toBeInTheDocument();
  });

  it("renders the task form to add", () => {
    render(
      <TaskForm
        onAddTask={mockOnAddTask}
        onUpdateTask={mockOnUpdateTask}
        editingTask={null}
      />
    );
    expect(screen.getByText("Add New Task")).toBeInTheDocument();
  });
});
