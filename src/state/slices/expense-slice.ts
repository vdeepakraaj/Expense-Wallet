import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { v4 as uuid } from "uuid";

var datetime = moment(new Date()).format("YYYY-MM-DD");

export const expenseSlice = createSlice({
  name: "expenseList",
  initialState: {
    budget: 2000,
    expenseList: [
      {
        id: uuid(),
        name: "shopping",
        cost: 40,
        date: datetime,
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Rent",
        cost: 400,
        date: datetime,
        category: "Housing",
      },
      {
        id: uuid(),
        name: "car service",
        cost: 50,
        date: datetime,
        category: "Others",
      },
    ],
  },
  reducers: {
    saveExpense: (state, param) => {
      const { payload } = param;
      state.expenseList.push(payload);
    },

    deleteExpense: (state, param) => {
      const { payload } = param;
      state.expenseList.splice(payload, 1);
    },

    setBudget: (state, param) => {
      const { payload } = param;
      state.budget = payload;
    },
  },
});

export const { saveExpense, deleteExpense, setBudget } = expenseSlice.actions;
export default expenseSlice.reducer;
