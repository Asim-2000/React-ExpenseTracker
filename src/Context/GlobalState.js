import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState={
    transactions: [
        {id:1,Text:"Flower",Amount:120},
        {id:2,Text:"Flower",Amount:-120},
        {id:3,Text:"Flower",Amount:120},
        {id:4,Text:"Flower",Amount:-120},
        
    ]
}

//Create Context

export const GlobalContext = createContext(initialState);

//Proivder Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)
    

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>

            {children}
        </GlobalContext.Provider>
    )
    

    
}