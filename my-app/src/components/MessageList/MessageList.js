import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAll } from './messageListSlice'
import './MessageList.scss'
import store from '../../store/store'

const MessageList = () => {
    const messages = useSelector(state => state.message.messages)
    let message = ''
    messages.map(item => message = item.message)
    console.log(messages)
    return (
        <div className='MessageList'>
            <div className='MessageList__wrapper'>
                <div className='MessageList__get-message'>Get message</div>
                {messages.length !== 0 ? <div className='MessageList__set-message'>{
                       messages.map(item => item.message)
                    }</div> : null}
                {/* <div className='MessageList__set-message'>{message}</div> */}
            </div>
        </div>
    )
}

// const Message = ({test}) => {
//     return (
//         <div className='MessageList__wrapper'>
//             <div className='MessageList__get-message'>Get message2</div>
//             <div className='MessageList__set-message'>{test}</div>
//         </div>
//     )
// }

export default MessageList