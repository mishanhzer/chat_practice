import React from 'react'
import './AppHeader.scss'

const AppHeader = ({picture, name}) => {
    return (
        <div className='appHeader'>
            <span>My chat app</span>
        </div>
    )
}

export default AppHeader