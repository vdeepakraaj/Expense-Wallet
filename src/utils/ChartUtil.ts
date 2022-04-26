import { Duration, format } from "date-fns";

import { IDataMap } from "../types/chartData";

// ChartMethods contains the necessary methods of this component
const ChartMethods = () => {
  const convertToCategoryMap = (
    expenseList: { category: string; cost: number }[]
  ) => {
    let dataMap: IDataMap = {};
    expenseList.forEach((expense: { category: string; cost: number }) => {
      // Having a map to save category and corresponding spending amount for that category in the list
      if (dataMap == null || dataMap[expense.category] == null) {
        dataMap[expense.category] = expense.cost;
      } else {
        dataMap[expense.category] = dataMap[expense.category] + expense.cost;
      }
    });
    return dataMap;
  };

  const convertToExpenseSevenDayOverTimeMap = (
    expenseList: { date: string; cost: number }[]
  ) => {
    let dataMap: IDataMap = {};
    expenseList.forEach((expense: { cost: number; date: string }) => {
      var day = format(new Date(expense.date), "EE");

      // Having a map to save category and corresponding spending amount for that category in the list
      if (dataMap == null || dataMap[day] == null) {
        dataMap[day] = expense.cost;
      } else {
        dataMap[day] = dataMap[day] + expense.cost;
      }
    });
    return dataMap;
  };

  const convertToExpenseOverOneMonthTimeMap = (
    expenseList: { date: string; cost: number }[]
  ) => {
    let dataMap: IDataMap = {};
    expenseList.forEach((expense: { cost: number; date: string }) => {
      var days = format(new Date(expense.date), "do MMM");

      // Having a map to save category and corresponding spending amount for that category in the list
      if (dataMap == null || dataMap[days] == null) {
        dataMap[days] = expense.cost;
      } else {
        dataMap[days] = dataMap[days] + expense.cost;
      }
    });
    return dataMap;
  };

  const convertToExpenseOverMonthsTimeMap = (
    expenseList: { date: string; cost: number }[]
  ) => {
    let dataMap: IDataMap = {};

    expenseList.forEach((expense: { cost: number; date: string }) => {
      var month = format(new Date(expense.date), "MMM yy");
      // Having a map to save category and corresponding spending amount for that category in the list
      if (dataMap == null || dataMap[month] == null) {
        dataMap[month] = expense.cost;
      } else {
        dataMap[month] = dataMap[month] + expense.cost;
      }
    });
    return dataMap;
  };

  const sortListAscByDate = (
    listOfExpense: {
      id: string;
      name: string;
      cost: number;
      date: string;
      category: string;
    }[]
  ) => {
    return listOfExpense.slice().sort(function (a, b) {
      if (new Date(a.date).getTime() - new Date(b.date).getTime() === 0) {
        return new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  };

  const isDateWithin7Days = (duration: Duration) => {
    return duration.years === 0 && duration.months === 0 && duration.days! < 7
      ? true
      : false;
  };

  const isDateWithinThirtyDays = (duration: Duration) =>
    duration.years === 0 && duration.months === 0 ? true : false;

  const isDateWithinSixMonths = (duration: Duration) =>
    duration.years === 0 && duration.months! >= 0 && duration.months! <= 6
      ? true
      : false;

  const isDateWithinOneYear = (duration: Duration) =>
    duration.years === 0 ? true : false;

  return {
    convertToCategoryMap,
    convertToExpenseSevenDayOverTimeMap,
    convertToExpenseOverOneMonthTimeMap,
    convertToExpenseOverMonthsTimeMap,
    isDateWithin7Days,
    isDateWithinSixMonths,
    isDateWithinOneYear,
    isDateWithinThirtyDays,
    sortListAscByDate,
  };
};

export default ChartMethods;
