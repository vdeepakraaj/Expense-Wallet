import { combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "../slices/expense-slice";

const rootReducer = combineReducers({
  expenseList: expenseSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
