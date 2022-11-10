import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
}

export type TasksStateType = {
    [key: string]: InTasksType
}

type InTasksType = {
    data: DataType[]
    filter: FilterValuesType
}

type DataType = {
    id: string
    title: string
    isDone: boolean
}


function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn"},
        {id: todolistId2, title: "What to buy"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: false}
            ],
            filter: "all"
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "Hello", isDone: false}
            ],
            filter: "all"
        }
    });


    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);


    // let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(todolistId: string, taskId: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setTasks({...tasks,[todolistId]:{...tasks[todolistId], data: tasks[todolistId].data.filter(f=>f.id!==taskId)}})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        setTasks({...tasks, [todolistId]:{...tasks[todolistId], data: [newTask,...tasks[todolistId].data]}})
    }

    function changeStatus(todolistId: string, taskId: string, isDoneValue: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
        setTasks({...tasks, [todolistId]:{...tasks[todolistId],
                data: tasks[todolistId].data.map(el=>el.id===taskId ?{...el, isDone:isDoneValue} :el)}})
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistId:string, value: FilterValuesType) {
        // setFilter(value);
        setTasks({...tasks, [todolistId]:{...tasks[todolistId], filter:value}})
    }

    const removeTodolist = (todolistId:string) => {
        setTodolists(todolists.filter(el=>el.id!==todolistId))
    }

    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id].data;
                if (tasks[el.id].filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                }
                if (tasks[el.id].filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;
