import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist/Todolist";
import {v1} from "uuid";

export type FilteredType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "Oh baby, don't hurt me", isDone: true},
        {id: v1(), title: "Don't hurt me", isDone: true},
        {id: v1(), title: "No more...", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    let [filter, setFilter] = useState<FilteredType>('all')
    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(f => f.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(f => f.isDone === true)
    }

    const changeFilter = (value: FilteredType) => {
        setFilter(value)
    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title:string) => {
    let task = {id: v1(), title: title, isDone: true}
    let newTask = [task,...tasks]
    setTasks(newTask)
    }

    return (
        <div className="App">
            <div>
            <Todolist title={'What is love'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
            </div>
        </div>
    );
}

export default App;
