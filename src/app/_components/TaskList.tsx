"use client";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
}

export default function TaskList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTask = (title: string, description: string) => {
    const task: Task = {
      id: uuid(),
      title,
      description,
      isComplete: false,
    };

    setTaskList([...taskList, task]);
    setTaskTitle("");
    setDescription("");
  };

  const deleteTask = (id: string) => {
    const updateTaskList = taskList.filter((task) => {
      return !(task.id === id);
    });

    setTaskList(updateTaskList);
  };

  const handleOnChange = (id: string) => {
    const taskIdUpdate = taskList.map((task) => {
      return task.id === id ? { ...task, isComplete: !task.isComplete } : task;
    });
    setTaskList(taskIdUpdate);
  };

  return (
    <div>
      <div className="m-5 flex justify-items-center">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter Task Title"
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          value={description}
          placeholder="Enter Task Description"
          className="textarea textarea-bordered"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mx-1 text-white shadow-md"
          onClick={() => {
            addTask(taskTitle, description);
          }}
        >
          Add Task
        </button>
      </div>

      <div>
        <ul className="menu flex min-h-full w-80 justify-items-center p-4 text-base-content">
          {taskList.map((task) => (
            <details key={task.id} className="collapse bg-base-200">
              <summary className="collapse-title text-xl font-medium">
                <input
                  className="checkbox checkbox-sm m-1 text-wrap"
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => handleOnChange(task.id)}
                />
                {task.title}
                <button
                  type="button"
                  className="min-w-30 group btn btn-primary btn-sm min-h-5 border-2 text-white shadow-md"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  Delete
                </button>
              </summary>

              <div className="collapse-content">
                <p>context</p>
              </div>
            </details>

            // className="input input-md input-bordered my-2 mt-2 flex w-fit max-w-xs flex-initial items-center justify-center text-balance border-2 text-start text-primary shadow-md"
          ))}
        </ul>
      </div>
    </div>
  );
}
