import { configureStore } from '@reduxjs/toolkit';

import message from '../components/MessageList/messageListSlice.js'

const store = configureStore({ 
    reducer: {message}, // подключение наших срезов
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production', 
})

export default store;

