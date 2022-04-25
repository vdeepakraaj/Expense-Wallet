import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

import { useSelector } from "react-redux";
import strings from "../../constants/Strings";
import { RootState } from "../../state/reducer/root-reducer";
import { FontSizes } from "../../styles/FontSizes";

const Balance = () => {
  const { expenseList, budget } = useSelector(
    (state: RootState) => state.expenseList
  );

  const spentAmount = expenseList.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = spentAmount > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType} d-flex align-items-center h-100`}>
      <span className="mt-12">
        <MdOutlineAccountBalanceWallet size={FontSizes.size4} />
      </span>
      <span>
        {strings.balanceAmount}: {strings.currency} {budget - spentAmount}
      </span>
    </div>
  );
};

export default Balance;
