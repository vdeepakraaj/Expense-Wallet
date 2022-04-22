import { useSelector } from "react-redux";
import { RootState } from "../../state/reducer/root-reducer";
import ExpenseItem from "../ExpenseItem";
import { v4 as uuidv4 } from "uuid";

const ExpenseList = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);
  console.log(" expenseList", expenseList);

  return (
    <ul className="list-group">
      {expenseList.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            id={expense.id}
            category={expense.category}
            cost={expense.cost}
          />
        </div>
      ))}
    </ul>
  );
};

export default ExpenseList;
