import { useState } from "react";

export default function TaskList() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [task, setNewTask] = useState<string>("");

  const addedTasks = (text: string) => {
    const newTaskList = [...taskList, text];
    setTaskList(newTaskList);
    setNewTask("");
  };

  const deleteTasks = (id: string) => {
    const removeTask = taskList.filter((task) => {
      return task !== id;
    });
    setTaskList(removeTask);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="btn btn-accent border-2 text-lg text-primary shadow-md">
        <h1>To-Do List: </h1>
      </div>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter Task"
          // className='border-current round-md #FF8989 h-10 w-60 m-6 whitespace-normal pt-2'
          style={{
            border: "3px solid #FF8989",
            borderRadius: 5,
            height: "45px",
            width: "300px",
            margin: "1rem",
            whiteSpace: "normal",
            padding: "1rem",
          }}
        />
        <button
          className="btn btn-accent mt-1 border-2 text-primary shadow-md"
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
          {taskList.map((task, index) => (
            <li key={index} className="text-wrap">
              {task}
              <button
                className="btn btn-accent m-3 border-2 text-primary shadow-md"
                type="button"
                onClick={() => {
                  deleteTasks(task);
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
