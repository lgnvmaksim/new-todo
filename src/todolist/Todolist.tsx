import {FilteredType} from "../App";
import {useState} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id:string)=>void
    changeFilter:(value: FilteredType)=>void
    addTask:(title:string)=>void
}

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState('')
    const addTaskButtonHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    return (
        <div className={'wrapper'}>
            <h3 className={'header'}>{props.title}</h3>
            <input
                className={'inputForText'}
            value={title}
            onChange={(e)=>{setTitle(e.currentTarget.value)}}
            onKeyDown={(e)=>{if(e.key==='Enter'){addTaskButtonHandler()}}}/>
            <button onClick={addTaskButtonHandler} className={'inputButton'}>+</button>
            <div>
                <ul>
                    {props.tasks.map(el => {

                        const onClickDeleteHandler = () => {
                            props.removeTask(el.id)
                        }

                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={onClickDeleteHandler}>X</button>
                            </li>)
                    })}
                </ul>
            </div>
            <button onClick={()=>{props.changeFilter('all')}}>All</button>
            <button onClick={()=>{props.changeFilter('active')}}>Active</button>
            <button onClick={()=>{props.changeFilter('completed')}}>Completed</button>
        </div>
    )
}