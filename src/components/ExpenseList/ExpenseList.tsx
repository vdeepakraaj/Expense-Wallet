import { useSelector } from "react-redux";
import { RootState } from "../../state/reducer/root-reducer";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  return (
    <ul className="list-group">
      {expenseList.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            date={expense.date}
          />
        </div>
      ))}
    </ul>
  );
};

export default ExpenseList;
