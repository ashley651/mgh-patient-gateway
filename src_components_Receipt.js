import React from 'react';
import './Receipt.css';

function Receipt({ expense }) {
  return (
    <div className="receipt">
      <h3>Receipt for {expense.name}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default Receipt;
