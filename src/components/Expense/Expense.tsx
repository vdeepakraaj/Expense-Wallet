import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

import strings from "../../constants/Strings";
import { RootState } from "../../state/reducer/root-reducer";
import { FontSizes } from "../../styles/FontSizes";

const Expense = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  const spentAmount = expenseList.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-warning d-flex align-items-center h-100">
      <span className="mt-12">
        <AiOutlineShoppingCart size={FontSizes.size4} />
      </span>
      <span>
        {strings.spentAmount}: {strings.currency} {spentAmount}
      </span>
    </div>
  );
};

export default Expense;
