import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Income from "./components/Income";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpense/AddExpense";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Expense Wallet</h1>
      <div className="row">
        <div className="col-sm">
          <Income />
        </div>
        <div className="col-sm">
          <Balance />
        </div>
        <div className="col-sm">
          <Expense />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>

      <div className="row mt-3">
        <h3 className="mt-3">Add Expense</h3>
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
