import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'

import {useHttp} from '../../hooks/http.hook';

import styles from './SendMessageForm.scss'
import { addMessage } from '../MessageList/messageListSlice'

export const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()

const SendMessageForm = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const request = useHttp()

    const onSumbit = (e) => {
        e.preventDefault()

        const message = {
            id: nanoid(),
            message: text,
            hours,
            minutes
        }

        dispatch(addMessage(message))
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        // <form onSubmit={onSumbit} className={styles.sendForm} action="submit">
        <form onSubmit={onSumbit} className='SendForm' action="submit">
            <input 
                onChange={handleChange}
                value={text}
                className='SendForm__input' 
                placeholder='Введите сообщение' 
                type="text" 
            />
        </form>
    )
}

export default SendMessageForm