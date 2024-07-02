import React, { useContext, useState } from 'react'
import expenseContext from '../context/expenses/expenseContext';

function AddExpense() {
    const context = useContext(expenseContext);
    const { addExpense } = context;
    
      const [text, setText] = useState('');
      const [amount, setAmount] = useState('');
    
      const addTransaction = () => {
        if (text === '' || amount === '') return;
    
        const newTransaction = {
          text: text,
          amount: parseFloat(amount)
        };
        addExpense(newTransaction);
        setText('');
        setAmount('');
    
      };
    return (

        <div className="card p-3 mb-3">
            <h4>Add new transaction</h4>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount..."
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={addTransaction}>
                Add transaction
            </button>
        </div>

    )
}

export default AddExpense
