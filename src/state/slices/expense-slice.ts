import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseList",
  initialState: {
    budget: 2000,
    expenseList: [
      { id: 1, name: "shopping", cost: 40 },
      { id: 13, name: "holiday", cost: 400 },
      { id: 14, name: "car service", cost: 50 },
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
