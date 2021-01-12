import React from 'react'

const Transactions = ({ transaction }) => {
    const sign= transaction.Amount<0 ? '-' : '+'
  return (
      <li className={transaction.Amount<0 ? 'minus' : 'plus'}>
        {transaction.Text}
          <span>{sign}${Math.abs(transaction.Amount)}</span>
        <button className="delete-btn">x</button>
      </li>
  );
}

export default Transactions
