import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";


function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    const [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(f => !f.isDone)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(f => f.isDone)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    const addTasks = (newText:string) => {
        let newTasks = {id: v1(), title: newText, isDone: true}
        setTasks([newTasks, ...tasks])
    }

    const removeTask = (id:string) => {
        setTasks(tasks.filter(f=>f.id!==id))
    }

    const changeIsDone = (isDoneChange:boolean ,id:string) => {
        setTasks(tasks.map(el=>el.id === id ? {...el, isDone: isDoneChange} :el))
    }

    return (
        <div className="App">
            <Todolist
                titleValue={"It's amazing name"}
                tasks={tasksForTodolist}
                changeFilter={changeFilter}
                addTasks={addTasks}
                removeTask={removeTask}
                changeIsDone={changeIsDone}
                filter={filter}
            />

        </div>
    );
}

export default App;
