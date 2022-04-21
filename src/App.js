import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Income from "./components/Income";

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
    </div>
  );
};

export default App;
