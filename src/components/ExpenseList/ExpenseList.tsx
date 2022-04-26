import { useSelector } from "react-redux";
import { RootState } from "../../state/reducer/root-reducer";
import EmptyView from "../EmptyView";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  if (expenseList.length === 0) {
    return <EmptyView message="No data" />;
  }

  return (
    <table className="table table-light">
      <thead>
        <tr>
          <th scope="col">Name of Expense</th>
          <th scope="col">Category</th>
          <th scope="col">Cost</th>
          <th scope="col">Date of Expense</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {expenseList.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            index={index}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            date={expense.date}
            category={expense.category}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
