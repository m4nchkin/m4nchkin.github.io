import React from 'react'
import './Message.module.css'
import Message from "./Message";

const messageData = {
    avatar: 'https://static.designcise.com/img/inspiration/lelevien/fox-logo-preview.png',
    name: 'Viktor',
    message: 'Greetings everyone! Happy hacking!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            {/*<Message*/}
            {/*    avatar={messageData.avatar}*/}
            {/*    name={messageData.name}*/}
            {/*    message={messageData.message}*/}
            {/*    time={messageData.time}*/}
            {/*/>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
