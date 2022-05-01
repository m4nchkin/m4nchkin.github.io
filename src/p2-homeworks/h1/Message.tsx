import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.item}>
            <div>
                <img src={props.avatar}/>
                <span className={s.triangle}>
                    <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td></td>
                        </tr>
                    <tr>
                        <td>{props.message}</td>
                        <td className={s.watch}>{props.time}</td>
                        </tr>

                    </tbody>
                </span>
            </div>
        </div>
    )
}

export default Message
