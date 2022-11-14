import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]});



    const changeFilter = (todolistID:string, value: FilterValuesType) => {
        setTodolists(todolists.map(el=>el.id===todolistID ? {...el, filter:value} :el))
    }

    const removeTask = (todolistID:string, id: string) => {
        setTasks({...tasks,[todolistID]: tasks[todolistID].filter(f=>f.id!==id)})
    }

    const addTasks = (todolistID:string, newText: string) => {
        let newTasks = {id: v1(), title: newText, isDone: false}
        setTasks({...tasks, [todolistID]:  [newTasks, ...tasks[todolistID]]})
    }


    const changeIsDone = (todolistID:string, isDoneChange: boolean, id: string) => {
        // setTasks(tasks.map(el=>el.id === id ? {...el, isDone: isDoneChange} :el))
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el=>el.id===id ? {...el, isDone: isDoneChange}: el)})
    }

    const removeTodolist = (id:string) => {
        setTodolists(todolists.filter(f=>f.id!==id))
        delete tasks[id]
        setTasks({...tasks})
    }

    return (
        <div className="App">
            {todolists.map(el=>{
                let tasksForTodolist = tasks[el.id]
                if (el.filter === 'active') {
                    tasksForTodolist = tasks[el.id].filter(f => !f.isDone)
                }

                if (el.filter === 'completed') {
                    tasksForTodolist = tasks[el.id].filter(f => f.isDone)
                }
                return(
                    <Todolist
                        todolistID = {el.id}
                        key={el.id}
                        titleValue={"It's amazing name"}
                        tasks={tasksForTodolist}
                        changeFilter={changeFilter}
                        addTasks={addTasks}
                        removeTask={removeTask}
                        changeIsDone={changeIsDone}
                        filter={el.filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    );
}

export default App;
