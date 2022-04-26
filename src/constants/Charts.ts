const LineChartOptions = {
  hAxis: {
    title: "Days",
  },
  vAxis: {
    title: "Expenses in SGD",
  },
  series: {
    1: { curveType: "function" },
  },
};

// The categories and percentage of amount spent on that category - Pie Chart
var pieChartKeys: string[] = ["Catgory", "%SpentOfAmountSpent"];
// The categories and percentage of amount spent on that category - Line Chart
var lineChartKeys: string[] = ["x", "Expenses over time"];

export { LineChartOptions, pieChartKeys, lineChartKeys };
