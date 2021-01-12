import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState={
    transactions: [
        {id:1,Text:"Flower",Amount:120000},
        {id:2,Text:"Flower",Amount:-120},
        {id:3,Text:"Flower",Amount:120},
        {id:4,Text:"Flower",Amount:-12000},
        
    ]
}

//Create Context

export const GlobalContext = createContext(initialState);

//Proivder Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //action functions


    //delete transaction
    function deletetransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id,
        })
        
    }

    //add transaction

    function AddTransaction(transaction){
        dispatch({
            type: "ADD",
            payload:transaction,
        })
    }

    

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deletetransaction,
            AddTransaction
        }}>

            {children}
        </GlobalContext.Provider>
    )
    

    
}