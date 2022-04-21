import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = () => {
  const expenseList = [
    { id: 1, name: "Food", cost: 40 },
    { id: 2, name: "Medicine", cost: 400 },
    { id: 3, name: "Cinema", cost: 50 },
  ];

  return (
    <ul className="list-group">
      {expenseList.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
