import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

var datetime = format(new Date(), "yyyy-MM-dd");

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
        date: format(new Date("2021-04-28"), "yyyy-MM-dd"),
        category: "Housing",
      },
      {
        id: uuid(),
        name: "car service",
        cost: 10,
        date: format(new Date("2021-10-24"), "yyyy-MM-dd"),
        category: "Others",
      },
      {
        id: uuid(),
        name: "shopping",
        cost: 40,
        date: format(new Date("2021-04-28"), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      // {
      //   id: uuid(),
      //   name: "shopping",
      //   cost: 40,
      //   date: format(new Date("2022-04-12"), "yyyy-MM-dd"),
      //   category: "Entertainment",
      // },
      // {
      //   id: uuid(),
      //   name: "shopping",
      //   cost: 40,
      //   date: format(new Date("2022-02-24"), "yyyy-MM-dd"),
      //   category: "Entertainment",
      // },
      // {
      //   id: uuid(),
      //   name: "shopping",
      //   cost: 40,
      //   date: format(new Date("2019-01-24"), "yyyy-MM-dd"),
      //   category: "Entertainment",
      // },
      // {
      //   id: uuid(),
      //   name: "shopping",
      //   cost: 40,
      //   date: format(new Date("2019-04-24"), "yyyy-MM-dd"),
      //   category: "Entertainment",
      // },
      // {
      //   id: uuid(),
      //   name: "shopping",
      //   cost: 40,
      //   date: format(new Date("2018-02-24"), "yyyy-MM-dd"),
      //   category: "Entertainment",
      // },
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
