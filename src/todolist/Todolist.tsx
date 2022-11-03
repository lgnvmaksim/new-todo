import {FilteredType} from "../App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id:string)=>void
    changeFilter:(value: FilteredType)=>void
    addTask:()=>void
}

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/>
            <button onClick={()=>{props.addTask()}}>+</button>
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