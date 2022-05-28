import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}


function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityColor = s[props.affair.priority]

    return (
            <table>
                <tr>
                    <td>
                        <span>{props.affair.name}</span>
                        <span className={priorityColor}> {props.affair.priority}</span>
                    </td>
                    <td>
                        <button onClick={deleteCallback}>X</button>
                    </td>
                </tr>
            </table>
    )
}

export default Affair
