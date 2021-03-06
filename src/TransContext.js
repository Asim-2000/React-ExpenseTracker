import { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const inittransactions = [
  { ammount: +7945, description: "cash" },
  { ammount: -3450, description: "book" },
  { ammount: +14350, description: "camera" },
  { ammount: +14350, description: "camera" },
];

export const transContext = createContext(inittransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, inittransactions);

  function AddTras(transObj) {
      
    dispatch({
      type: "ADD",
      payload: {
        ammount: transObj.ammount,
        description: transObj.description,
      },
    });
  }

  return (
    <transContext.Provider
      value={{
        transactions: state,
        AddTras:AddTras,
      }}
    >
      {children}
    </transContext.Provider>
  );
};
