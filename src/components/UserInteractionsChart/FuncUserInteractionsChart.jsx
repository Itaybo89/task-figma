import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FuncUserInteractionsChart = () => {
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: "column",
      reflow: true,
    },
    title: {
      text: "User Interface",
      align: "left",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        return `<span style="color:${this.series.color}; font-weight: bold;">${this.y}</span>`;
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
        data: [800, 1500, 1200, 1100, 400, 2100, 1400],
        color: "#3452ee",
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

  return (
    <div id="popularity-div" style={{ height: "100%", width: "100%" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default FuncUserInteractionsChart;
