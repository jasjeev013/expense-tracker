import React, { useContext, useEffect} from 'react'
import expenseContext from '../context/expenses/expenseContext'
function History() {
    

    const context = useContext(expenseContext);
    const {transactions,deleteTransaction} = context;


    return (

        <div className="card p-3 mb-3">
            <h4>History</h4>
            <ul className="list-group">
                {transactions.map((transaction, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between"> 
                        <div style={{
                            width:'60px'
                        }}>

                        {transaction.text}
                        </div>
                        <div style={{
                            width:'100px',
                        }}>

                        <span className={transaction.amount > 0 ? 'text-success' : 'text-danger'}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                        </span>
                        </div>
                        <i className="fa-solid fa-trash" onClick={() =>{ deleteTransaction(index)}}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default History
