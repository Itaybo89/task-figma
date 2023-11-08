import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./FuncCompletionRate.css";

const FuncCompletionRate = () => {
  const chartRef = useRef(null);

  const colors = {
    blue: "#3b5cf6",
    green: "#39d17b",
    orange: "#faa022",
  };

  const data = [
    { name: "Completions", y: 60, color: colors.blue },
    { name: "Customer Services", y: 20, color: colors.green },
    { name: "Drop-offs", y: 20, color: colors.orange },
  ];

  const options = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        fontFamily: "Arial",
      },
      events: {
        load: function () {
          this.renderer
            .text(
              "Completion",
              this.plotLeft + this.plotWidth * 0.5,
              this.plotTop + this.plotHeight * 0.5
            )
            .attr({
              "text-anchor": "middle",
              "font-size": "16px",
              "font-weight": "bold",
              fill: "#959aa6",
            })
            .css({
              width: this.plotWidth,
              color: "#333333",
            })
            .add();
        },
      },
    },
    title: {
      text: "Completion Rate",
      align: "left",
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<div style="color: #959aa6;">${this.point.name}</div>
                <div style="font-weight: bold; font-size: larger; color: black;">${this.y}%</div>`;
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
        startAngle: 125,
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
    },
    series: [
      {
        name: "Share",
        colorByPoint: true,
        innerSize: "60%",
        data: data,
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
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "100%" }}>
      <div style={{ flex: 1, width: "100%", height: "100%" }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartRef}
          containerProps={{ style: { width: "100%", height: "100%" } }}
        />
      </div>
      <div className="legend" style={{ width: "30%", height: "80%", marginLeft: "10px", marginTop: "250px" }}>
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuncCompletionRate;
