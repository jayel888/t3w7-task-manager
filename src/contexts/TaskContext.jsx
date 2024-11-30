import { createContext, useContext, useState } from "react";


const TaskContext = createContext();

export default function TaskProvider(props){
    let [tasks, setTasks] = useState([]);

    // AddTask function
    const addTask = (task) => setTasks((prev) => [...prev, task] );

    // DeleteTask function
    const deleteTask = (id) => setTasks((prev) => prev.filter((task) => task.id != id))

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
            {/* const [tasks, setTasks] = setTaskValue(); */}
            {props.children}
        </TaskContext.Provider>
    )
}

// Creating a custom hook!
export function useTasks() {
    console.log("Passing data around.");
    let context = useContext(TaskContext);
    if (!context){
        console.log("No Task found.");
    }
    return context;
}