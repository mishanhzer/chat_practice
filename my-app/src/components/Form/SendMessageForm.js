import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'

import {useHttp} from '../../hooks/http.hook';

import './SendMessageForm.scss'
import { addMessage } from '../MessageList/messageListSlice'

const SendMessageForm = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const request = useHttp()

    const onSumbit = (e) => {
        e.preventDefault()

        const message = {
            id: nanoid(),
            message: text
        }

        dispatch(addMessage(message))
        setText('')
    }

    return (
        <form onSubmit={onSumbit} className='SendForm' action="submit">
            <input 
                onChange={(e) => setText(e.target.value)}
                value={text}
                className='SendForm__input' 
                placeholder='Введите сообщение' 
                type="text" />
        </form>
    )
}

export default SendMessageForm