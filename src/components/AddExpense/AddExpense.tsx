import { useState } from "react";
import { useDispatch } from "react-redux";
import strings from "../../constants/Strings";
import { saveExpense } from "../../state/slices/expense-slice";
import { v4 as uuid } from "uuid";
import moment from "moment";

const AddExpenseForm = () => {
  const dispatch = useDispatch();
  var datetime = moment(new Date()).format("YYYY-MM-DD");

  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState(datetime);

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const expense = {
      id: uuid(),
      category: category,
      cost: parseInt(cost),
      date: date,
    };
    dispatch(saveExpense(expense));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">{strings.category}</label>
          <div className="mt-3">
            <input
              required={true}
              type="text"
              className="form-control"
              id="name"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            ></input>
          </div>
          <div className="row"></div>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">{strings.cost}</label>
          <div className="mt-3">
            <input
              required={true}
              type="text"
              className="form-control"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              id="cost"
            ></input>
          </div>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">{strings.date}</label>
          <div className="mt-3">
            <input
              required={true}
              type="date"
              value={date}
              className="form-control"
              onChange={(event) => setDate(event.target.value)}
              id="date"
            ></input>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary mt-3">
          {strings.addButton}
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
