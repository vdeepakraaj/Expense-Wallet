import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import { Income } from "./components/Income";
import store from "../src/state/store";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpense";
import ChartComponent from "./components/Charts/ChartComponent";
import Strings from "./constants/Strings";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="mt-3">{Strings.appTilte}</h1>
        <div className="row">
          <div className="col-sm" id="id_income">
            <Income />
          </div>
          <div className="col-sm">
            <Balance />
          </div>
          <div className="col-sm">
            <Expense />
          </div>
        </div>

        <div className="row mt-3">
          <h3 className="mt-3">{Strings.addButton}</h3>
          <div className="row">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>

        <h3 className="mt-3">{Strings.expenseList}</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <div className="row mt-3">
          <h3 className="mt-3">{Strings.chart}</h3>
          <div className="row">
            <div className="col-sm">
              <ChartComponent />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
