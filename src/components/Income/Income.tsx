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
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditIncome handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewIncome handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Income;
