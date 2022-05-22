import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number// need to fix any
}

// презентационная компонента (для верстальщика)
// const Greeting: React.FC<GreetingPropsType> = (
//     {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
// )
function Greeting(props: GreetingPropsType) {
    const inputClass = s.error  // need to fix with (?:)

    return (
        <div>
            <input value={props.name} onChange={props.setNameCallback} className={inputClass ? 'error' : ''}/>
            {inputClass && <span className={s.someClass}>
                {props.error}
            </span>}
            <button onClick={props.addUser}>add</button>
            <span>{props.totalUsers}</span>
        </div>
    )
}

export default Greeting
