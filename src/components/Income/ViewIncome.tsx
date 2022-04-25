import React from "react";
import { GrMoney } from "react-icons/gr";
import Strings from "../../constants/Strings";
import { FontSizes } from "../../styles/FontSizes";

const ViewIncome = (props: {
  budget: number;
  handleEditClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <span>
        <GrMoney size={FontSizes.size4} />
        {` ${Strings.budget} ${Strings.currency}`}
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
