import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducer/root-reducer";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  return (
    <ul className="list-group">
      {expenseList.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
