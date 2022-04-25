import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditIncome, ViewIncome } from ".";
import { RootState } from "../../state/reducer/root-reducer";
import { setBudget } from "../../state/slices/expense-slice";
import React from "react";

const Income = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state: RootState) => state.expenseList.budget);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value: string) => {
    dispatch(setBudget(value));
    setIsEditing(false);
  };

  return (
    <div className="alert alert-primary p-3 d-flex align-items-center justify-content-between h-100">
      {isEditing ? (
        <EditIncome handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewIncome handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Income;
