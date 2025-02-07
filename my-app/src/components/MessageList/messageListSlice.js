import { createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    messages: [],
    heroesLoadingStatus: 'idle',
}

const messagesSlice = createSlice({ 
    name: 'messages', 
    initialState, 
    reducers: { 
        addMessage: (state, action) => {state.messages.push(action.payload) }
    }
})

const {actions, reducer} = messagesSlice

export default reducer 

export const {
    addMessage
} = actions