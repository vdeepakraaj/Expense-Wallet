import { TiDelete } from "react-icons/ti";
import strings from "../../constants/Strings";

const ExpenseItem = (props: any) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.category}
      <div>
        <span className="badge bg-secondary mx-3">
          {strings.currency} {props.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
