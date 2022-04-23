import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import strings from "../../constants/Strings";
import { deleteExpense } from "../../state/slices/expense-slice";

const ExpenseItem = (props: {
  id: string;
  name: string;
  cost: number;
  date: string;
}) => {
  const dispatch = useDispatch();
  const onDeleteExpense = () => {
    dispatch(deleteExpense(props.id));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-secondary mx-3">{props.date}</span>
        <span className="badge bg-secondary mx-3">
          {strings.currency} {props.cost}
        </span>
        <TiDelete size="1.5em" onClick={onDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
