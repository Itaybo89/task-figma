import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FuncErrorAnalysis = () => {
  const errorData = [600, 800, 1000, 1050, 900, 700, 500];
  const [timeFrame, setTimeFrame] = useState("Month");

  const options = {
    chart: {
      type: "areaspline",
      zoomType: "x",
      height: 325,
      width: 650,
    },
    title: {
      text: "Error Analysis",
      align: "left",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      tickmarkPlacement: "on",
      title: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: "Number of Errors",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      valueSuffix: " errors",
      followPointer: true,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        marker: {
          enabled: true,
          fillColor: "white",
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0],
        },
      },
    },
    series: [
      {
        name: "Errors",
        data: errorData,
        color: "#058DC7",
        negativeColor: "#FF0000",
      },
    ],
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div
      id="container"
      style={{ height: "325px", width: "650px", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FuncErrorAnalysis;
