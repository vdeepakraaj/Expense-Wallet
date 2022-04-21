import React from "react";
import strings from "../../constants/Strings";

const Expense = () => {
  return (
    <div className="alert alert-warning">
      <span>
        {strings.spentAmount}: {strings.currency} 5000
      </span>
    </div>
  );
};

export default Expense;
