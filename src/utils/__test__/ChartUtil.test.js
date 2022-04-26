import * as React from "react";

import ChartMethods from "../ChartUtil";
import { format, intervalToDuration, subDays } from "date-fns";

describe("util class test", () => {
  test("check Whether the method return true if date is within this week", () => {
    let expected = true;
    let expenseDate = format(new Date(), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithin7Days(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return false if date is not within this week", () => {
    let expected = false;
    let expenseDate = format(subDays(new Date(), 20), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithin7Days(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return true if date is within this month", () => {
    let expected = true;
    let expenseDate = format(subDays(new Date(), 20), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinThirtyDays(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return false if date is not within this month", () => {
    let expected = false;
    let expenseDate = format(subDays(new Date(), 40), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinThirtyDays(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return true if date is within six months", () => {
    let expected = true;
    let expenseDate = format(subDays(new Date(), 100), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinSixMonths(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return false if date is not within six months", () => {
    let expected = false;
    let expenseDate = format(subDays(new Date(), 250), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinSixMonths(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return true if date is within a year", () => {
    let expected = true;
    let expenseDate = format(subDays(new Date(), 209), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinOneYear(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return false if date is not within a year", () => {
    let expected = false;
    let expenseDate = format(subDays(new Date(), 400), "yyyy-MM-dd");
    var differenceInTime = intervalToDuration({
      start: new Date(expenseDate),
      end: new Date(),
    });

    var actual = ChartMethods().isDateWithinOneYear(differenceInTime);
    expect(expected).toBe(actual);
  });

  test("check Whether the method return category map ", () => {
    let expected = { Cinema: 150, Shopping: 400 };
    let expenseList = [
      {
        id: 1,
        category: "Cinema",
        cost: 40,
      },
      {
        id: 2,
        category: "Cinema",
        cost: 110,
      },
      {
        id: 3,
        category: "Shopping",
        cost: 400,
      },
    ];

    var actual = ChartMethods().convertToCategoryMap(expenseList);

    expect(expected).toEqual(actual);
  });

  test("check Whether the method return 7 day category map ", () => {
    let dataMap = {};
    let day = format(new Date(), "EE");

    dataMap[day] = 550;

    let expenseList = [
      {
        id: 1,
        category: "Cinema",
        cost: 40,
        date: format(new Date(), "yyyy-MM-dd"),
      },
      {
        id: 2,
        category: "Cinema",
        cost: 110,
        date: format(new Date(), "yyyy-MM-dd"),
      },
      {
        id: 3,
        category: "Shopping",
        cost: 400,
        date: format(new Date(), "yyyy-MM-dd"),
      },
    ];

    var actual =
      ChartMethods().convertToExpenseSevenDayOverTimeMap(expenseList);

    expect(dataMap).toEqual(actual);
  });

  test("check Whether the method return 30 day category map ", () => {
    let dataMap = {};
    let day = format(subDays(new Date(), 20), "do MMM");

    dataMap[day] = 550;

    let expenseList = [
      {
        id: 1,
        category: "Cinema",
        cost: 40,
        date: format(subDays(new Date(), 20), "yyyy-MM-dd"),
      },
      {
        id: 2,
        category: "Cinema",
        cost: 110,
        date: format(subDays(new Date(), 20), "yyyy-MM-dd"),
      },
      {
        id: 3,
        category: "Shopping",
        cost: 400,
        date: format(subDays(new Date(), 20), "yyyy-MM-dd"),
      },
    ];

    var actual =
      ChartMethods().convertToExpenseOverOneMonthTimeMap(expenseList);

    expect(dataMap).toEqual(actual);
  });

  test("check Whether the method return 6 months category map ", () => {
    let dataMap = {};
    let day = format(subDays(new Date(), 100), "MMM yy");

    dataMap[day] = 150;

    let expenseList = [
      {
        id: 1,
        category: "Cinema",
        cost: 40,
        date: format(subDays(new Date(), 100), "yyyy-MM-dd"),
      },
      {
        id: 2,
        category: "Cinema",
        cost: 110,
        date: format(subDays(new Date(), 100), "yyyy-MM-dd"),
      },
    ];

    var actual = ChartMethods().convertToExpenseOverMonthsTimeMap(expenseList);
    expect(dataMap).toEqual(actual);
  });

  test("check Whether the method return 1 year category map ", () => {
    let dataMap = {};
    let day = format(subDays(new Date(), 100), "MMM yy");

    dataMap[day] = 150;

    let expenseList = [
      {
        id: 1,
        category: "Cinema",
        cost: 40,
        date: format(subDays(new Date(), 100), "yyyy-MM-dd"),
      },
      {
        id: 2,
        category: "Cinema",
        cost: 110,
        date: format(subDays(new Date(), 100), "yyyy-MM-dd"),
      },
    ];

    var actual = ChartMethods().convertToExpenseOverMonthsTimeMap(expenseList);
    expect(dataMap).toEqual(actual);
  });
});
