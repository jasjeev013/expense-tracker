
import './App.css';
import Account from './components/Account';
import History from './components/History';
import AddExpense from './components/AddExpense';

function App() {
  

  
  return (
    <div className="container">
      <h2 className="mt-3 text-center">Expense Tracker</h2>
      <Account />
      <History />
      <AddExpense/>
    </div>
  );
}

export default App;
