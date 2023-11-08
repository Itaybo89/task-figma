import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FuncErrorAnalysis = () => {
  const errorData = [600, 800, 1000, 1050, 900, 700, 500];
  const [timeFrame, setTimeFrame] = useState("Month");
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: "areaspline",
      zoomType: "x",
      height: 600,
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

  useEffect(() => {
    let resizeTimeout;

    const resizeChart = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (chartRef && chartRef.current) {
          chartRef.current.chart.reflow();
        }
      }, 500);
    };

    window.addEventListener("resize", resizeChart);

    resizeChart();

    return () => window.removeEventListener("resize", resizeChart);
  }, []);

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div
      id="container"
      style={{ height: "100%", width: "100%", position: "relative" }}
    >
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
      />
    </div>
  );
};

export default FuncErrorAnalysis;
