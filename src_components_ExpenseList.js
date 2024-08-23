import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, name: 'Grocery', amount: 50 },
    { id: 2, name: 'Rent', amount: 500 },
    { id: 3, name: 'Utilities', amount: 100 }
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <span>{expense.name}</span>
          <span>${expense.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
