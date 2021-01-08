import React from "react";

function Child() {

    let transactions = [
        {amount:+500, description:"cash"},
        {amount:-50, description:"book"},
        {amount:+10, description:"camera"},
    ]

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
                  return( <li>
                      <span>{transobj.description}</span>
                      <span>{ transobj.amount }</span>
              </li>)
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

        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
