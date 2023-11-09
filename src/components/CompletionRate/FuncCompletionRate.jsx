import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./FuncCompletionRate.css";

const FuncCompletionRate = () => {
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
      height: 325,
      width: 650,
      style: {
        fontFamily: "Arial",
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
        showInLegend: false,
        allowPointSelect: false,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          formatter: function () {
            if (this.point.name === "Completions") {
              return `<b>${this.point.name}</b>`;
            }
            return "";
          },
          style: {
            color:
              (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black",
            textOverflow: "ellipsis",
            fontWeight: "normal",
            fontSize: "13px",
          },
          distance: -125,
        },
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

  return (
    <div className="chart-container">
      <div className="chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: { width: "100%", height: "100%" } }}
        />
      </div>
      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="legend-text">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuncCompletionRate;
