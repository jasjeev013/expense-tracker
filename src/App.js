
import './App.css';
import Account from './components/Account';
import History from './components/History';
import AddExpense from './components/AddExpense';
import ExpensesState from './context/expenses/ExpensesState';

function App() {



  return (
    <ExpensesState>

      <div className="container">
        <h2 className="mt-3 text-center">Expense Tracker</h2>
        <Account />
        <History />
        <AddExpense />
      </div>
    </ExpensesState>
  );
}

export default App;
