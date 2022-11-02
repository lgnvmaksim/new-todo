import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist/Todolist";
import {v1} from "uuid";

function App() {

    let [tasks, setTasks]= useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const removeTask = (id:string) => {
    let filteredTasks = tasks.filter(t=>t.id!==id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title={'What is love'}
                      tasks = {tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
