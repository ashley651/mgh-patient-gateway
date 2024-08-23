import React from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
