import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {

    let [Text, setText] = useState('')
  let [Amount, setAmount] = useState(0)

  const { AddTransaction } = useContext(GlobalContext);
  
  const SubmitHandler =e => {
    e.preventDefault();

    const NewTransaction = {
      id: Math.floor(Math.random() * 10000),
      Text,
      Amount:+Amount
    }

    AddTransaction(NewTransaction);
  }
    
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={SubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={Text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={Amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction
