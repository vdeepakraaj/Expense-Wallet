import React from "react";
import { useSelector } from "react-redux";
import strings from "../../constants/Strings";
import { RootState } from "../../state/reducer/root-reducer";

const Expense = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  const spentAmount = expenseList.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-warning">
      <span>
        {strings.spentAmount}: {strings.currency} {spentAmount}
      </span>
    </div>
  );
};

export default Expense;
