import { useState } from "react";
import strings from "../../constants/Strings";
const EditIncome = (props: {
  budget: any;
  handleSaveClick: (value: any) => void;
}) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required={true}
        type="number"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        {strings.save}
      </button>
    </>
  );
};

export default EditIncome;
