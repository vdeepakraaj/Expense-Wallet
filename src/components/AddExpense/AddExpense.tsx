import React from "react";
import strings from "../../constants/Strings";

const AddExpenseForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">{strings.category}</label>
          <div className="mt-3">
            <input
              required={true}
              type="text"
              className="form-control"
              id="name"
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
              id="cost"
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
