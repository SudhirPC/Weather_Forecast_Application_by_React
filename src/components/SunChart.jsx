import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Chart from "chart.js/auto";

class SunChart extends React.Component {
  state = {
    dataLine: {
      labels: ["6am", "1pm", "8pm"],
      datasets: [
        {
          label: "Temperature",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#f7e70568",
          borderColor: "#faea05a9",
          data: [0, 10, 0],
        },
      ],
    },
  };
  render() {
    return (
      <MDBContainer style={{ height: "9.5rem" }}>
        <Line
          style={{ height: "100%" }}
          data={this.state.dataLine}
          options={{
            maintainAspectRatio: false,
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
  }
}
export default SunChart;
