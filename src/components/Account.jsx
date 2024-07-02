import React, { useContext } from 'react'
import expenseContext from '../context/expenses/expenseContext'

function Account() {
    const context = useContext(expenseContext);
    const {calculateTotalIncome,calculateTotalExpense, calculateTotalBalance} = context;


    return (

        <div className="d-flex justify-content-center">
            <div className="card p-3 mb-3">
                <h4 className="text-center">YOUR BALANCE</h4>
                <h1 className="text-center">${calculateTotalBalance()}</h1>
                <div className="d-flex justify-content-around">
                    <div className='mx-4'>
                        <h4 className="text-success">INCOME</h4>
                        <p className="text-success">${calculateTotalIncome()}</p>
                    </div>
                    <div className='mx-4'>
                        <h4 className="text-danger ">EXPENSE</h4>
                        <p className="text-danger">${calculateTotalExpense()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Account
