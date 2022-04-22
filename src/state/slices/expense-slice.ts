import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const expenseSlice = createSlice({
  name: "expenseList",
  initialState: {
    budget: 2000,
    expenseList: [
      { id: uuid(), category: "shopping", cost: 40 },
      { id: uuid(), category: "holiday", cost: 400 },
      { id: uuid(), category: "car service", cost: 50 },
    ],
  },
  reducers: {
    saveExpense: (state, param) => {
      const { payload } = param;
      state.expenseList.push(payload);
    },
  },
});

export const { saveExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
