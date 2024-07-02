import React, { useState } from 'react'

function History() {
    const [transactions, setTransactions] = useState([
        { text: 'Cash', amount: 500 },
        { text: 'Book', amount: -40 },
        { text: 'Camera', amount: -200 },
    ]);
    return (

        <div className="card p-3 mb-3">
            <h4>History</h4>
            <ul className="list-group">
                {transactions.map((transaction, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        {transaction.text}
                        <span className={transaction.amount > 0 ? 'text-success' : 'text-danger'}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default History
