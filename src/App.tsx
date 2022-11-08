import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTasks = (id:string) => {
        setTasks(tasks.filter(f=>f.id!==id))
    }

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(f=>!f.isDone)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(f=>f.isDone)
    }

    const changeFilterButton = (value:FilterValuesType) => {
        setFilter(value)
    }

    const addTask = (text:string) => {
        setTasks([{ id: v1(), title: text, isDone: true },...tasks])
    }


    return (
        <div className="App">
            <Todolist tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilterButton={changeFilterButton}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
