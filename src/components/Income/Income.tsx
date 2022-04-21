import React from "react";
import { useSelector } from "react-redux";
import strings from "../../constants/Strings";
import { RootState } from "../../state/reducer/root-reducer";

const Income = () => {
  const budget = useSelector((state: RootState) => state.expenseList.budget);
  return (
    <div className="alert alert-info">
      <span>
        {strings.incomeAmount}: {strings.currency} {budget}
      </span>
    </div>
  );
};

export default Income;
