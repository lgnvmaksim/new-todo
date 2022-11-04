import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist/Todolist";
import {v1} from "uuid";

export type FilteredType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "Oh baby, don't hurt me", isDone: true, head: 'What is love'},
        {id: v1(), title: "Don't hurt me", isDone: true, head: 'What is song'},
        {id: v1(), title: "No more...", isDone: false, head: 'Try to guess song'},
    ])

    let [filtered, setFiltered] = useState<FilteredType>('all')
    let filteredForTasks = tasks
    if (filtered === "active") {
        filteredForTasks = tasks.filter(f => f.isDone)
    }
    if (filtered === "completed") {
        filteredForTasks = tasks.filter(f => !f.isDone)
    }

    const changeFilter = (value: FilteredType) => {
        setFiltered(value)
    }

    const removeTask = (id: string) => {
        let remove = tasks.filter(f => f.id !== id)
        setTasks(remove)
    }

    const addTask = (t:string) => {
        let newTask = {id: v1(), title: t, isDone: true, head: 'What is love'}
        let addNewTask = [newTask,...tasks]
        setTasks(addNewTask)
    }


    return (
        <div className="App">
            <div>
                <Todolist tasks={filteredForTasks}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}/>
            </div>
        </div>
    );
}

export default App;
