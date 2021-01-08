import { createContext, useReducer } from 'react'
import TransReducer from './TransReducer'




 const transactions = [
   { amount: +7945, description: "cash" },
   { amount: -3450, description: "book" },
   { amount: +14350, description: "camera" },
]; 



export const transContext = createContext(transactions);

export const TransactionProvider = ({children}) => {

    let [state, dispatch] = useReducer(TransReducer, transactions);

    function AddTras(transObj) {

        dispatch({
            type: 'ADD',
            payload: {
                amounnt: transObj.amounnt,
                description: transObj.description,
            }
        })
    }

    return (
        <transContext.Provider value={{
            transactions: state,
            AddTras
        }}>
            {children}

        </transContext.Provider>
    )
    
}