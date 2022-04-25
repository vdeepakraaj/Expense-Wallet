export interface IDataMap {
  [key: string]: number;
}

export type LineChartData = {
  id: string;
  name: string;
  cost: number;
  date: string;
  category: string;
};

export type ExpenseItem = {
  id: string;
  name: string;
  cost: number;
  date: string;
  category: string;
  index?: number;
};
