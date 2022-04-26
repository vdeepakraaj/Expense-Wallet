import { createSlice } from "@reduxjs/toolkit";
import { format, subDays } from "date-fns";
import { v4 as uuid } from "uuid";

var datetime = format(new Date(), "yyyy-MM-dd");

export const expenseSlice = createSlice({
  name: "expenseList",
  initialState: {
    budget: 10000,
    expenseList: [
      {
        id: uuid(),
        name: "Xolo",
        cost: 400,
        date: datetime,
        category: "Clothing",
      },
      {
        id: uuid(),
        name: "Bus ",
        cost: 40,
        date: format(subDays(new Date(), 1), "yyyy-MM-dd"),
        category: "Transportation",
      },
      {
        id: uuid(),
        name: "HLA",
        cost: 100,
        date: format(subDays(new Date(), 2), "yyyy-MM-dd"),
        category: "Clothing",
      },
      {
        id: uuid(),
        name: "Gym",
        cost: 300,
        date: format(subDays(new Date(), 3), "yyyy-MM-dd"),
        category: "Membership",
      },
      {
        id: uuid(),
        name: "Cinema",
        cost: 230,
        date: format(subDays(new Date(), 4), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "shopping",
        cost: 41,
        date: format(subDays(new Date(), 5), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "ZARA",
        cost: 120,
        date: format(subDays(new Date(), 6), "yyyy-MM-dd"),
        category: "Clothing",
      },
      {
        id: uuid(),
        name: "VR Game",
        cost: 410,
        date: format(subDays(new Date(), 8), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Sports",
        cost: 800,
        date: format(subDays(new Date(), 12), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Vegetables",
        cost: 140,
        date: format(subDays(new Date(), 14), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "CD",
        cost: 400,
        date: format(subDays(new Date(), 19), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Racing",
        cost: 670,
        date: format(subDays(new Date(), 21), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Uno",
        cost: 740,
        date: format(subDays(new Date(), 22), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Fruits",
        cost: 40,
        date: format(subDays(new Date(), 24), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Movie",
        cost: 40,
        date: format(subDays(new Date(), 29), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Outing",
        cost: 240,
        date: format(subDays(new Date(), 100), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Food items",
        cost: 430,
        date: format(subDays(new Date(), 120), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Travel",
        cost: 900,
        date: format(subDays(new Date(), 121), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Cinema",
        cost: 80,
        date: format(subDays(new Date(), 129), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Milk",
        cost: 40,
        date: format(subDays(new Date(), 133), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Travel",
        cost: 1200,
        date: format(subDays(new Date(), 139), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Avengers",
        cost: 120,
        date: format(subDays(new Date(), 141), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Fish",
        cost: 40,
        date: format(subDays(new Date(), 149), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Chicken",
        cost: 80,
        date: format(subDays(new Date(), 172), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Cycle",
        cost: 240,
        date: format(subDays(new Date(), 201), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Travel",
        cost: 420,
        date: format(subDays(new Date(), 208), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Cinema",
        cost: 300,
        date: format(subDays(new Date(), 213), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Outing",
        cost: 190,
        date: format(subDays(new Date(), 219), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Chicken",
        cost: 120,
        date: format(subDays(new Date(), 300), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Outing",
        cost: 412,
        date: format(subDays(new Date(), 304), "yyyy-MM-dd"),
        category: "Entertainment",
      },
      {
        id: uuid(),
        name: "Sprouts",
        cost: 10,
        date: format(subDays(new Date(), 309), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Yoga",
        cost: 80,
        date: format(subDays(new Date(), 319), "yyyy-MM-dd"),
        category: "Membership",
      },
      {
        id: uuid(),
        name: "Fruits",
        cost: 20,
        date: format(subDays(new Date(), 329), "yyyy-MM-dd"),
        category: "Groceries",
      },
      {
        id: uuid(),
        name: "Gym",
        cost: 90,
        date: format(subDays(new Date(), 345), "yyyy-MM-dd"),
        category: "Membership",
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
