type PropsType = {
    title: string
    tasks: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type={"checkbox"} checked={props.tasks[0].isDone}/>{props.tasks[0].title}</li>
                <li><input type={"checkbox"} checked={props.tasks[1].isDone}/>{props.tasks[1].title}</li>
                <li><input type={"checkbox"} checked={props.tasks[2].isDone}/>{props.tasks[2].title}</li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>React</button>
        </div>
    )
}