import React, { useState } from 'react'
import ExpenseContext from './expenseContext'

const ExpensesState = (props) => {

    const intialTransaction = [
        { text: 'Cash', amount: 500 },
        { text: 'Book', amount: -40 },
        { text: 'Camera', amount: -200 },
        { text: 'Batack', amount: 500 },
    ];
    const [transactions, setTransactions] = useState(intialTransaction);

    const addExpense = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
        console.log(transactions);
    }

    const updateExpense = (newTransaction,index)=> {
        transactions[index]=newTransaction;
        setTransactions([...transactions]);
   
    }

    const deleteTransaction = (index) => {
        transactions.splice(index, 1);
        setTransactions([...transactions]);
  
    }

    const calculateTotalIncome = () => {
        let income = 0;
        transactions.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        });
        return income;

    }

    const calculateTotalExpense = () => {
        let expense = 0;
        transactions.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        });
        return expense;

    }

    const calculateTotalBalance = () => {
        let balance = 0;
        transactions.forEach(transaction => {
            balance += transaction.amount;
        });
        return balance;

    }
    return (
        <ExpenseContext.Provider value={{ transactions, addExpense, calculateTotalIncome, 
            calculateTotalExpense, calculateTotalBalance,updateExpense,deleteTransaction
         }}>
            {props.children}
        </ExpenseContext.Provider>
    )

}

export default ExpensesState
