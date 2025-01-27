import logo from './logo.svg';
import './App.css';

import React from "react";
import { Chart } from "react-google-charts";


function App() {
  const data = [
    ["Тип", "часов в день"],
    ["Работа", 11],
    ["Еда", 2],
    ["Чуханье кота", 2],
    ["Отдых", 2],
    ["Сон", 7],
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

export default App;
