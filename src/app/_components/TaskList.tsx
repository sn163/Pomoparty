import { useState } from "react";

interface checkListItem {
  id: number;
  task: string;
  isChecked: boolean;
}

export default function TaskList() {
  const [taskList, setTaskList] = useState<checkListItem[]>([]);
  const [task, setNewTask] = useState<string>("");
  const [incrementID, setIncrementID] = useState<number>(0);

  const addedTasks = (text: string) => {
    const newTaskList: checkListItem = {
      id: incrementID,
      task: text,
      isChecked: false,
    };

    setTaskList([...taskList, newTaskList]);
    setNewTask("");
    setIncrementID(incrementID + 1);
  };

  const deleteTasks = (text: string, index: number) => {
    const updatedTaskList = taskList.filter(
      (task, i) => !(task.task === text && task.id === index && task.isChecked),
    );

    setTaskList(updatedTaskList);
  };

  const handleOnChange = (index: number) => {
    const updateTaskList = taskList.map((task) =>
      task.id === index ? { ...task, isChecked: !task.isChecked } : task,
    );

    setTaskList(updateTaskList);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="pt-10">
      <div className="h-30 flex w-60 items-center justify-center rounded-full border-2 border-primary bg-secondary text-lg text-white shadow-md shadow-red-500">
        <h1>To-Do List: </h1>
      </div>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter Task"
          className="round-none m-1 mt-6 border-2 border-current border-primary pt-2 indent-2"
        />
        <button
          className="btn btn-accent btn-sm border-2 text-primary shadow-md"
          type="button"
          onClick={() => {
            addedTasks(task);
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((task) => (
            <li
              key={task.id}
              className="my-2 mt-2 flex w-fit items-center justify-end text-balance border-2 text-center text-primary shadow-md"
            >
              {task.task}
              <input
                // className="btn btn-accent m-3 border-2 text-primary shadow-md"
                className="checkbox checkbox-md m-1 "
                type="checkbox"
                checked={task.isChecked}
                onChange={() => handleOnChange(task.id)}
              />
              <button
                type="button"
                className="item-center m-1 flex justify-center rounded-full border-2 border-primary bg-secondary text-white"
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
