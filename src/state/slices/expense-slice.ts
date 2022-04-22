import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const expenseSlice = createSlice({
  name: "expenseList",
  initialState: {
    budget: 2000,
    expenseList: [
      { id: uuidv4(), category: "shopping", cost: 40 },
      { id: uuidv4(), category: "holiday", cost: 400 },
      { id: uuidv4(), category: "car service", cost: 50 },
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
