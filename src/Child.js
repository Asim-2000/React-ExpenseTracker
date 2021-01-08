import React, { useContext, useReducer } from "react";
import { transContext } from "./TransContext";

function Child() {
    let transactions = useContext(transContext);
    
    const handleAddition = (event) => {
        event.preventDefault();
        
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

      <form action="" className="transaction-form">
        <label htmlFor="desc">
          Enter Text <br />
          <input type="text" name="" id="desc" required />
        </label>
        <br />

        <label htmlFor="trans">
          Enter Ammount
          <br />
          <input type="number" name="" id="trans" required />
        </label>

        <br />

        <input type="submit" value="Add Transaction" onSubmit={ handleAddition } />
      </form>
    </div>
  );
}

export default Child;
