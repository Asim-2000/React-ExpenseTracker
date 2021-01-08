import React, { useContext, useReducer, useState } from "react";
import { transContext } from "./TransContext";

function Child() {
    let transactions = useContext(transContext);

    let [newDesc, setDesc] = useState("")
    let [newAmmount, setAmmount]= useState(0)
    
    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmmount);
        
    }

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker </h1>

      <h3>
        Your Balance: <br /> $260
      </h3>

      <div className="expense-container">
        <h3>
          INCOME <br /> $260
        </h3>
        <h3>
          EXPENSE <br /> $260
        </h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="transaction-list">
        {transactions.map((transobj, index) => {
          return (
            <li key={index}>
              <span>{transobj.description}</span>
              <span>{transobj.amount}</span>
            </li>
          );
        })}
      </ul>

      <h3>Add New Transaction</h3>
      <hr />

      <form onSubmit={ handleAddition } className="transaction-form">
        <label htmlFor="desc">
          Enter Text <br />
                  <input type="text" name="" onChange={(event) => setDesc(event.target.value)} id="desc" required />
        </label>
        <br />

        <label htmlFor="trans">
          Enter Ammount
          <br />
          <input type="number" name="" id="trans" onChange={(event)=>setAmmount(event.target.value)}  required />
        </label>

        <br />

        <input type="submit" value="Add Transaction"  />
      </form>
    </div>
  );
}

export default Child;
