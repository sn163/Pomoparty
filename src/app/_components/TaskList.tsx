"use client";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

interface checkListItem {
  id: string;
  task: string;
  isChecked: boolean;
}

export default function TaskList() {
  const [taskList, setTaskList] = useState<checkListItem[]>([]);
  const [task, setNewTask] = useState<string>("");

  const addedTasks = (text: string) => {
    const newTaskList: checkListItem = {
      id: uuid(),
      task: text,
      isChecked: false,
    };

    setTaskList([...taskList, newTaskList]);
    setNewTask("");
  };

  const deleteTasks = (text: string, id: string) => {
    const updateTaskList = taskList.filter((task, i) => {
      return !(task.id === id && task.task === text && task.isChecked);
    });

    setTaskList(updateTaskList);
  };

  const handleOnChange = (id: string) => {
    const taskIdUpdate = taskList.map((task) => {
      return task.id === id ? { ...task, isChecked: !task.isChecked } : task;
    });
    setTaskList(taskIdUpdate);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  // return (
  //   <div>
  //     <div className="h-30 flex w-60 items-center justify-center rounded-full border-2 border-primary bg-secondary text-lg text-white shadow-md shadow-red-500 m-5">
  //       <h1>To-Do List: </h1>
  //     </div>
  //     <div className="flex justify-items-start">
  //       <input
  //         type="text"
  //         value={task}
  //         onChange={handleInputChange}
  //         placeholder="Enter Task"
  //         className="input input-bordered w-full max-w-xs"
  //       />
  //       <button
  //         type="button"
  //         className="btn mx-1 btn-primary text-white shadow-md"
  //         onClick={() => {
  //           addedTasks(task);
  //         }}
  //       >
  //         Add Task
  //       </button>
  //     </div>
  //     <div>
  //       <ul>
  //         {taskList.map((task) => (
  //           <li
  //             key={task.id}
  //             className="my-2 mt-2 flex w-fit items-center justify-end text-balance border-2 text-center text-primary shadow-md input input-bordered input-md max-w-xs"
  //           >
  //             {task.task}
  //             <input
  //               className="checkbox checkbox-sm m-1"
  //               type="checkbox"
  //               checked={task.isChecked}
  //               onChange={() => handleOnChange(task.id)}
  //             />
  //             <button
  //               type="button"
  //               className="btn group min-w-30 min-h-5 btn-primary btn-sm border-2 text-white shadow-md"
  //               onClick={() => {
  //                 deleteTasks(task.task, task.id);
  //               }}
  //             >
  //               Delete
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );

  return (
    <div className="drawer drawer-end m-5">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-center">
        <div className="flex justify-items-start">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter Task"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="button"
            className="btn btn-primary mx-1 text-white shadow-md"
            onClick={() => {
              addedTasks(task);
            }}
          >
            Add Task
          </button>
        </div>

        <label htmlFor="my-drawer-4" className="btn btn-primary drawer-button">
          To Do List
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex min-h-full w-80 justify-items-center bg-base-200 p-4 text-base-content">
          {taskList.map((task) => (
            <li
              key={task.id}
              className="input input-md input-bordered my-2 mt-2 flex w-fit max-w-xs items-center justify-center text-balance border-2 text-start text-primary shadow-md"
            >
              {task.task}
              <input
                className="checkbox checkbox-xs m-1"
                type="checkbox"
                checked={task.isChecked}
                onChange={() => handleOnChange(task.id)}
              />
              <button
                type="button"
                className="min-w-30 group btn btn-primary btn-sm min-h-5 border-2 text-white shadow-md"
                onClick={() => {
                  deleteTasks(task.task, task.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
