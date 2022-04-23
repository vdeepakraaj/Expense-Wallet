import { useSelector } from "react-redux";
import { VictoryPie, VictoryTooltip } from "victory";
import { RootState } from "../../../state/reducer/root-reducer";
import { IDataMap, PieChartData } from "../../../model/pieChartData";
import { useEffect, useState } from "react";

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
  const [endAngle, setEndAngle] = useState(0);
  const [data, setData] = useState<PieChartData[]>([]);
  var chartData: PieChartData[] = [];

  // Map to store key as category and value as total expense related to that category
  var categoryMap: IDataMap =
    PieChartMethods().convertToCategoryMap(expenseList);

  // Iterating the map to transform to pie chart data
  Object.keys(categoryMap).map((key) => {
    let data: PieChartData = {
      x: key,
      y: categoryMap[key],
      label: key,
    };
    chartData.push(data);
  });

  useEffect(() => {
    setTimeout(() => {
      setEndAngle(360);
      setData(chartData);
    }, 100);
  }, [chartData]);

  return (
    <VictoryPie
      animate={{
        duration: 2000,
        easing: "bounce",
      }}
      colorScale="warm"
      radius={120}
      endAngle={endAngle}
      style={{ labels: { padding: 5, fontSize: 15 } }}
      data={data}
      labels={({ datum }) => `${datum}`}
      labelPlacement={({ datum }) => datum.placement}
      labelComponent={<VictoryTooltip active />}
    />
  );
};

export default PieChart;
