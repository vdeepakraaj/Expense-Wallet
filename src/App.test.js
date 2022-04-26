import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import Strings from "./constants/Strings";

test("Check whether App title exists", () => {
  render(<App />);
  expect(screen.getByText(Strings.appTilte)).toBeInTheDocument();
});

test("Check whether chart title exists", () => {
  render(<App />);
  expect(screen.getByText(Strings.chart)).toBeInTheDocument();
});

test("Check whether Add Expense string occurs 2 times", () => {
  render(<App />);
  expect(screen.getAllByText(Strings.addButton).length).toBe(2);
});

test("Check whether Expenses title exists", () => {
  render(<App />);
  expect(screen.getByText(Strings.expenseList)).toBeInTheDocument();
});
