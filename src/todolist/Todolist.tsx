import React, {useState, MouseEvent, KeyboardEvent} from 'react';
import {FilteredType} from "../App";


export type TodolistType = {
    tasks: TasksList[]
    removeTask: (id: string) => void
    changeFilter: (e: FilteredType) => void
    addTask: (t: string) => void
}

type TasksList = {
    id: string
    title: string
    isDone: boolean
    head: string
}

export const Todolist = (props: TodolistType) => {

    let [title, setTile] = useState('')

    const onClickDeleteButton = (id: string) => {
        props.removeTask(id)
    }
    const onClickAddMessage = () => {
        props.addTask(title)
        setTile('')
    }

    const onKeyPressInput = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(title)
    }}

    return (
        <div className={'wrapper'}>
            <h3>What is love</h3>
            <input
                value={title}
                className={'inputForText'}
                onChange={(e) => {
                    setTile(e.currentTarget.value)
                }}
                onKeyDown={onKeyPressInput}
            />
            <button className={'inputButton'} onClick={onClickAddMessage}>+</button>
            <ul>
                {props.tasks.map(el => {
                    return (
                        <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => onClickDeleteButton(el.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => {
                props.changeFilter('all')
            }}>Всё шо есть
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>Фигачим их
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>Завершенные
            </button>
        </div>
    )
}