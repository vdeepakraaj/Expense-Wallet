import React from "react";
import Strings from "../../constants/Strings";

const ViewIncome = (props: {
  budget: number;
  handleEditClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <span>
        {Strings.budget} {Strings.currency}
        {props.budget}
      </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        {Strings.Edit}
      </button>
    </>
  );
};

export default ViewIncome;
