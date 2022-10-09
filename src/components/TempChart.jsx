import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Chart from "chart.js/auto";

const TempChart = ({ tempChartData, tempData }) => {
  const [state, setState] = useState({
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "Temperature",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#3887ff8d",
          borderColor: "#1a81f0e4",
          pointBackgroundColor: "rgb(255,255,255)",
          pointHoverBackgroundColor: "#ffffff",
          pointBorderColor: "#1a7ef0e4",
          pointRadius: 0,
          pointHoverRadius: 2,
          data: tempChartData,
        },
      ],
    },
  });

  useEffect(() => {
    setState({
      dataLine: {
        labels: tempData,
        datasets: [
          {
            label: "Temperature",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "#3887ff8d",
            borderColor: "#1a81f0e4",
            pointBackgroundColor: "rgb(255,255,255)",
            pointHoverBackgroundColor: "#ffffff",
            pointBorderColor: "#1a7ef0e4",
            pointRadius: 3,
            pointHoverRadius: 5,
            data: tempChartData,
          },
        ],
      },
    });
  }, [tempChartData]);

  return (
    <MDBContainer>
      <Line
        data={state?.dataLine}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </MDBContainer>
  );
};

export default TempChart;
