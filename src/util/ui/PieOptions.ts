import { Colors } from "../../styles/Colors";

export const getPieOptions = () => {
  return {
    title: "Pie Chart",
    pieHole: 0,
    slices: [
      {
        color: Colors.pie1,
      },
      {
        color: Colors.pie2,
      },
      {
        color: Colors.pie3,
      },
      {
        color: Colors.pie4,
      },
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: Colors.legendColor,
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%",
    },
    fontName: "Roboto",
  };
};
