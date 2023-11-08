import React, { useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FuncProductPopularity = () => {
  const chartRef = useRef(null);
  const [timeFrame, setTimeFrame] = useState("Month");

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Product Popularity",
      align: "left",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: [
        "CDs",
        "Mortgages",
        "Loans",
        "Credit card",
        "Fds",
        "Bonds",
        "Forex cash",
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: {
      formatter: function () {
        return `<span style="color:${this.series.color}; font-weight: bold;">${this.y} people</span>`;
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        groupPadding: 0.25,
        borderWidth: 40,
        borderRadius: 25,
        states: {
          hover: {
            enabled: true,
            color: "#3452ee",
            borderColor: "#d6e8ff",
            borderWidth: 0,
          },
        },
      },
    },
    series: [
      {
        name: "Interactions",
        data: [200, 600, 1000, 600, 400, 800, 500],
        color: "#3452ee",
      },
    ],
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div id="container" className="chart-container">
      <style>
        {`
          .chart-container {
            height: 100%;
            width: 100%;
            position: relative;
          }

          .highcharts-container {
            height: 100% !important; // Ensure chart div resizes to the entire height
          }
        `}
      </style>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "60px",
          zIndex: 1000,
        }}
      >
        <select
          value={timeFrame}
          onChange={handleTimeFrameChange}
          style={{ color: "#959AA6", fontSize: "1.5em" }}
        >
          <option value="Month">Month</option>
          <option value="Week">Week</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default FuncProductPopularity;
