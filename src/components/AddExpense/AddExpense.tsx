import { useState } from "react";
import { useDispatch } from "react-redux";

import strings from "../../constants/Strings";
import { saveExpense } from "../../state/slices/expense-slice";
import { v4 as uuid } from "uuid";
import { format, subYears } from "date-fns";

import { MAX_NUMBER_INPUT, MAX_STRING_INPUT } from "../../constants/Constants";

const AddExpenseForm = () => {
  const dispatch = useDispatch();
  var datetime = format(new Date(), "yyyy-MM-dd");

  const [category, setCategory] = useState("Others");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState(datetime);

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const expense = {
      id: uuid(),
      name: name,
      cost: parseInt(cost),
      date: date,
      category: category,
    };

    dispatch(saveExpense(expense));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">{strings.name}</label>
          <div className="mt-3">
            <input
              required={true}
              type="text"
              className="form-control"
              id="name"
              value={name}
              maxLength={MAX_STRING_INPUT}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div className="row"></div>
        </div>

        <div className="col-sm form-group">
          <label htmlFor="categoryList">{strings.category}</label>
          <div className="mt-3">
            <select
              className="form-control form-select"
              id="exampleFormControlSelect"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value={strings.food}>{strings.food}</option>
              <option value={strings.medical}>{strings.medical}</option>
              <option value={strings.grocery}>{strings.grocery}</option>
              <option value={strings.clothing}>{strings.clothing}</option>
              <option value={strings.transportation}>
                {strings.transportation}
              </option>
              <option value={strings.housing}>{strings.housing}</option>
              <option value={strings.membership}>{strings.membership}</option>
              <option value={strings.entertainment}>
                {strings.entertainment}
              </option>
              <option value={strings.others}>{strings.others}</option>
            </select>
          </div>
        </div>

        <div className="col-sm">
          <label htmlFor="cost">{strings.cost}</label>
          <div className="mt-3">
            <input
              required={true}
              type="number"
              className="form-control"
              min="0"
              max={MAX_NUMBER_INPUT}
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
              max={format(new Date(), "yyyy-MM-dd")}
              min={format(subYears(new Date(), 1), "yyyy-MM-dd")}
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
