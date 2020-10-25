import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1-07-2020", "2-07-2020", "3-07-2020", "4-07-2020"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 54],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14,
  },
};

const options = {
  title: {
    display: false,
    text: "Chart Title",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          suggestedMin: 0,
          suggestedMax: 100,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
    ],
  },
};

export const Chart = () => {
  return <Line legend={legend} options={options} data={data} />;
};
