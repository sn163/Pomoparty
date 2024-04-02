import { useState } from 'react';

export default function TaskList() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setNewTask] = useState<string>('');

    const addedTasks = (text:string) => {
        const newTaskList = [...taskList, text];
        setTaskList(newTaskList);
        setNewTask('');
    }

    const deleteTasks = (id:string) => {
        const removeTask = taskList.filter((task) => {
            return task !== id;
        })
        setTaskList(removeTask);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };

    return(
    <>
    <div 
    style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'1.5rem', fontSize:'25px'}}
    className="btn-main rounded-full"
    >
        <h1>To-Do List: </h1>
    </div>
    <div>
        <input 
        type="text"
        value={task} 
        onChange={handleInputChange} 
        placeholder='Enter task'
        style={{
            border:'3px solid #FF8989', 
            borderRadius:5, 
            height:'45px', 
            width:'300px', 
            margin:'1rem', 
            whiteSpace:'normal',
            padding:'1rem',
        }}
        />
        <button 
        className="btn-main rounded-full "
        type='button'
        onClick={() => {addedTasks(task)}}
        > 
            Add Task 
        </button>
    </div>
    <div>
        <ul>
            {taskList.map((task, index) => (
                <li key={index} className='text-wrap'> 
                {task} 
                <button
                className="btn-main rounded-full "
                type='button'
                style={{margin:'.5rem'}}
                onClick={() => {deleteTasks(task)}}
                > 
                    Delete 
                </button> 
                </li>
            ))}
        </ul>
    </div>
    </>
    );
};