import React from "react";
import { useSelector } from "react-redux";
import strings from "../../constants/Strings";
import { RootState } from "../../state/reducer/root-reducer";

const Balance = () => {
  const { expenseList, budget } = useSelector(
    (state: RootState) => state.expenseList
  );

  const spentAmount = expenseList.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = spentAmount > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>
        {strings.balanceAmount}: {strings.currency} {budget - spentAmount}
      </span>
    </div>
  );
};

export default Balance;
