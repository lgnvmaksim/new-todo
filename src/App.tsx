import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist/Todolist";
import {v1} from "uuid";

export type FilteredType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
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

    const addTask = () => {
    let task = {id: v1(), title: 'sdsdsdsd', isDone: true}
    let newTask = [task,...tasks]
    setTasks(newTask)
    }

    return (
        <div className="App">
            <Todolist title={'What is love'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
