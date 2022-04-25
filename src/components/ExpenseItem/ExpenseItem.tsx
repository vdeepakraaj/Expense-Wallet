import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import strings from "../../constants/Strings";
import { deleteExpense } from "../../state/slices/expense-slice";
import { Colors } from "../../styles/Colors";
import { ExpenseItem as Expense } from "../../types/chartData";

const ExpenseItem = (props: Expense) => {
  const dispatch = useDispatch();
  const onDeleteExpense = () => {
    dispatch(deleteExpense(props.index));
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <span>{props.category}</span>
      </td>
      <td>
        <span>{props.date}</span>
      </td>
      <td>
        <span>
          {strings.currency} {props.cost}
        </span>
      </td>
      <td>
        <BsFillTrashFill
          size="1.3em"
          color={Colors.red}
          onClick={() => onDeleteExpense()}
        ></BsFillTrashFill>
      </td>
    </tr>
  );
};

export default ExpenseItem;
