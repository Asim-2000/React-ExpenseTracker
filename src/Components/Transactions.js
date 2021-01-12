import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Transactions = ({ transaction }) => {
    const sign = transaction.Amount < 0 ? '-' : '+'
    const {deletetransaction} = useContext(GlobalContext)
  return (
      <li className={transaction.Amount<0 ? 'minus' : 'plus'}>
        {transaction.Text}
          <span>{sign}${Math.abs(transaction.Amount)}</span>
        <button onClick={()=>deletetransaction(transaction.id)} className="delete-btn">x</button>
      </li>
  );
}

export default Transactions
