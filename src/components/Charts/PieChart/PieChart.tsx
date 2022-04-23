import { useSelector } from "react-redux";
import { RootState } from "../../../state/reducer/root-reducer";
import { IDataMap } from "../../../model/pieChartData";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getPieOptions } from "../../../util/ui/PieOptions";

// PieChartMethods contains the necessary methods of this component
export const PieChartMethods = () => {
  const convertToCategoryMap = (
    expenseList: { category: string | number; cost: number }[]
  ) => {
    let dataMap: IDataMap = {};
    expenseList.map((expense: { category: string | number; cost: number }) => {
      // Having a map to save category and corresponding spending amount for that category in the list
      if (dataMap == null || dataMap[expense.category] == null) {
        dataMap[expense.category] = expense.cost;
      } else {
        dataMap[expense.category] += dataMap[expense.category] + expense.cost;
      }
    });
    return dataMap;
  };

  return {
    convertToCategoryMap,
  };
};

const PieChart = () => {
  const { expenseList } = useSelector((state: RootState) => state.expenseList);

  var chartData: (string | number)[][] = [];

  // The categories and percentage of amount spent on that category
  var keys: string[] = ["Catgory", "%SpentOfAmountSpent"];

  // Pushing the key names
  chartData.push(keys);

  // Map to store key as category and value as total expense related to that category
  var categoryMap: IDataMap =
    PieChartMethods().convertToCategoryMap(expenseList);
  // Iterating the hashmap to retrieve the category and corresponding expense amount
  Object.keys(categoryMap).map((key) => {
    var item: (string | number)[] = [];
    item.push(key);
    item.push(categoryMap[key]);
    chartData.push([...item]);
  });

  const pieOptions = getPieOptions();

  return (
    <>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={pieOptions}
        graph_id="PieChart"
        width={"100%"}
        height={"400px"}
        legend_toggle
      />
    </>
  );
};

export default PieChart;
