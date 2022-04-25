import { useSelector } from "react-redux";
import { RootState } from "../../../state/reducer/root-reducer";
import { ExpenseItem, IDataMap, LineChartData } from "../../../types/chartData";
import Chart from "react-google-charts";
import { getPieOptions } from "../../../util/ui/PieOptions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Duration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import Strings from "../../../constants/Strings";
import ChartMethods from "../../../util/ui/ChartUtil";

import {
  LineChartOptions,
  pieChartKeys,
  lineChartKeys,
} from "../../../constants/Charts";

const ChartComponent = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);
  var chartData: (string | number)[][] = [];
  var lineChartData: (string | number | null)[][] = [];
  const [sevenDayList, setSevenDayList] = useState<LineChartData[]>([]);
  const [thirtyDayList, setThirtyDayList] = useState<LineChartData[]>([]);
  const [sixMonthsList, setSixMonthsList] = useState<LineChartData[]>([]);
  const [oneYearList, setOneYearList] = useState<LineChartData[]>([]);
  const [sortedExpenseList, setSortedExpenseList] = useState<ExpenseItem[]>([]);
  const [isThisWeek, setIsThisWeek] = useState(false);
  const [isThirtyDays, setIsThirtyDays] = useState(false);
  const [isSixMonths, setIsSixMonths] = useState(false);
  const [isOneYear, setIsOneYear] = useState(false);
  // Pushing the key names
  chartData.push(pieChartKeys);
  // Pushing the key names
  lineChartData.push(lineChartKeys);

  const onClickThisWeek = () => {
    setIsThisWeek(true);
    setIsThirtyDays(false);
    setIsSixMonths(false);
    setIsOneYear(false);
  };

  const onClickThisMonth = () => {
    setIsThisWeek(false);
    setIsThirtyDays(true);
    setIsSixMonths(false);
    setIsOneYear(false);
  };

  const onClickSixMonths = () => {
    setIsThisWeek(false);
    setIsThirtyDays(false);
    setIsSixMonths(true);
    setIsOneYear(false);
  };

  const onClickOneYear = () => {
    setIsThisWeek(false);
    setIsThirtyDays(false);
    setIsSixMonths(false);
    setIsOneYear(true);
  };

  const reset = () => {
    setOneYearList([]);
    setSixMonthsList([]);
    setThirtyDayList([]);
    setSevenDayList([]);
    setIsThisWeek(false);
    setIsThirtyDays(false);
    setIsSixMonths(false);
    setIsOneYear(false);
  };

  useEffect(() => {
    reset();
    const sorted = SortTheListAscByDate(expenseList);
    setSortedExpenseList(sorted);
    // Looping through the sorted object to find the difference between today and the respective expense date and adding to the corresponding list
    findTheDurationDiffAndAddToList(
      sorted,
      setOneYearList,
      setSixMonthsList,
      setThirtyDayList,
      setSevenDayList
    );
  }, [expenseList]);

  useEffect(() => {
    if (sevenDayList.length !== 0) {
      onClickThisWeek();
      return;
    }

    if (thirtyDayList.length !== 0) {
      onClickThisMonth();
      return;
    }

    if (sixMonthsList.length !== 0) {
      onClickSixMonths();
      return;
    }

    if (oneYearList.length !== 0) {
      onClickOneYear();
      return;
    }
  }, [sevenDayList, thirtyDayList, sixMonthsList, oneYearList]);

  // Map to store key as category and value as total expense related to that category
  //PieChart
  createPieChartData();

  // Map to store key as category and value as total expense related to that category
  //LineBarChart
  createLineBarChartData();

  return (
    <div className="row">
      <Chart
        style={{ marginTop: "16px" }}
        chartType="PieChart"
        data={chartData}
        options={getPieOptions()}
        graph_id="PieChart"
        width={"100%"}
        height={"400px"}
      />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
        style={{ marginTop: "16px" }}
      >
        {sevenDayList.length > 0 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClickThisWeek()}
          >
            {Strings.week}
          </button>
        ) : (
          <div />
        )}

        {thirtyDayList.length > 0 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClickThisMonth()}
          >
            {Strings.thirtyDays}
          </button>
        ) : (
          <div />
        )}
        {sixMonthsList.length > 0 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClickSixMonths()}
          >
            {Strings.sixMonths}
          </button>
        ) : (
          <div />
        )}
        {oneYearList.length > 0 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClickOneYear()}
          >
            {Strings.oneYear}
          </button>
        ) : (
          <div />
        )}
      </div>
      {lineChartData.length > 1 ? (
        <Chart
          style={{ marginTop: "16px" }}
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={lineChartData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
        />
      ) : (
        <div />
      )}
    </div>
  );

  /**
   * Method to create a dataset for line bar chart
   */
  function createLineBarChartData() {
    var lineChartMap: IDataMap =
      ChartMethods().convertToExpenseSevenDayOverTimeMap(sevenDayList);

    if (isThirtyDays) {
      lineChartMap =
        ChartMethods().convertToExpenseOverOneMonthTimeMap(thirtyDayList);
    }
    if (isSixMonths) {
      lineChartMap =
        ChartMethods().convertToExpenseOverMonthsTimeMap(sixMonthsList);
    }
    if (isOneYear) {
      lineChartMap =
        ChartMethods().convertToExpenseOverMonthsTimeMap(oneYearList);
    }

    if (isThisWeek) {
      lineChartMap =
        ChartMethods().convertToExpenseSevenDayOverTimeMap(sevenDayList);
    }

    // Iterating the hashmap to retrieve the category and corresponding expense amount
    // eslint-disable-next-line array-callback-return
    Object.keys(lineChartMap!).map((key: string) => {
      var item: (string | number)[] = [];
      item.push(key);
      item.push(lineChartMap[key]);
      lineChartData.push([...item]);
    });
  }

  /**
   * Method to create dataset for PieChart
   */
  function createPieChartData() {
    var categoryMap: IDataMap =
      ChartMethods().convertToCategoryMap(sortedExpenseList);
    // Iterating the hashmap to retrieve the category and corresponding expense amount
    // eslint-disable-next-line array-callback-return
    Object.keys(categoryMap).map((key) => {
      var item: (string | number)[] = [];
      item.push(key);
      item.push(categoryMap[key]);
      chartData.push([...item]);
    });
  }
};
/**
 * Sorting the expense List by date
 * @param listOfExpense
 * @returns
 */
function SortTheListAscByDate(
  listOfExpense: {
    id: string;
    name: string;
    cost: number;
    date: string;
    category: string;
  }[]
) {
  return ChartMethods().sortListAscByDate(listOfExpense);
}

/**
 * Traverse through the expense List and add the expense to the following list accordingly
 * (Ex) If a expense falls between today and within last 7 days, expense will be added to weekly list
 * If a expense falls between today and within last 30 days, expense will be added to last 30 days list
 * The same goes with 6 month and a year list
 * @param sortedExpenseList
 * @param setOneYearList
 * @param setSixMonthsList
 * @param setThirtyDayList
 * @param setSevenDayList
 */
function findTheDurationDiffAndAddToList(
  sortedExpenseList: ExpenseItem[],
  setOneYearList: React.Dispatch<React.SetStateAction<LineChartData[]>>,
  setSixMonthsList: React.Dispatch<React.SetStateAction<LineChartData[]>>,
  setThirtyDayList: React.Dispatch<React.SetStateAction<LineChartData[]>>,
  setSevenDayList: React.Dispatch<React.SetStateAction<LineChartData[]>>
) {
  // eslint-disable-next-line array-callback-return
  sortedExpenseList.map((expense) => {
    // Return the duration diff between dates
    var differenceInTime = intervalToDuration({
      start: new Date(expense.date),
      end: new Date(),
    });

    checkWhetherOneYearDiffAndAddToList(differenceInTime);
    checkWhetherSixMonthDiffAndAddToList(differenceInTime);
    checkWhetherThirtyDayDiffAndAddToList(differenceInTime);
    checkWhetherSevenDayDiffAndAddToList(differenceInTime);

    function checkWhetherOneYearDiffAndAddToList(differenceInTime: Duration) {
      var isDateWithinOneYear =
        ChartMethods().isDateWithinOneYear(differenceInTime);

      if (isDateWithinOneYear) {
        setOneYearList((previous) => {
          return [...previous, expense];
        });
      }
    }

    function checkWhetherSixMonthDiffAndAddToList(differenceInTime: Duration) {
      var isDateWithinSixMonths =
        ChartMethods().isDateWithinSixMonths(differenceInTime);

      if (isDateWithinSixMonths) {
        setSixMonthsList((previous) => {
          return [...previous, expense];
        });
      }
    }

    function checkWhetherThirtyDayDiffAndAddToList(differenceInTime: Duration) {
      var isDateWithinThirtyDays =
        ChartMethods().isDateWithinThirtyDays(differenceInTime);

      if (isDateWithinThirtyDays) {
        setThirtyDayList((previous) => {
          return [...previous, expense];
        });
      }
    }

    function checkWhetherSevenDayDiffAndAddToList(differenceInTime: Duration) {
      var isDateWithin7Days =
        ChartMethods().isDateWithin7Days(differenceInTime);
      if (isDateWithin7Days) {
        setSevenDayList((previous) => {
          return [...previous, expense];
        });
      }
    }
  });
}

export default ChartComponent;
