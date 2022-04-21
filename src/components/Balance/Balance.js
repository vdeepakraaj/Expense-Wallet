import React from "react";
import strings from "../../constants/Strings";

const Balance = () => {
  return (
    <div className="alert alert-success">
      <span>
        {strings.balanceAmount}: {strings.currency} 1000
      </span>
    </div>
  );
};

export default Balance;
