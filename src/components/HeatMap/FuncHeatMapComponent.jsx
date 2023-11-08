import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap";

heatmap(Highcharts);

const FuncHeatMapComponent = () => {
  const dataMatrix = [
    [9, 8, 1, 6, 5, 2, 5, 9, 7],
    [6, 9, 3, 5, 8, 5, 9, 6, 8],
    [4, 3, 2, 9, 1, 3, 2, 4, 3],
    [5, 9, 8, 5, 8, 5, 9, 6, 8],
    [9, 8, 5, 6, 4, 8, 6, 9, 5],
    [2, 3, 4, 1, 8, 3, 2, 4, 2],
    [4, 3, 2, 1, 3, 1, 2, 5, 3],
  ];

  const seriesData = dataMatrix.flatMap((row, rowIndex) =>
    row.map((value, colIndex) => [colIndex, 6 - rowIndex, value])
  );

  const options = {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
      width: 1200,
    },
    title: {
      text: "Peak Interaction Times",
      align: "left",
      x: 10,
    },
    xAxis: {
      categories: [
        "12 am",
        "01 am",
        "02 am",
        "03 am",
        "04 am",
        "05 am",
        "06 am",
        "07 am",
        "08 am",
      ],
    },
    yAxis: {
      categories: [
        "Saturday",
        "Friday",
        "Thursday",
        "Wednesday",
        "Tuesday",
        "Monday",
        "Sunday",
      ],
      title: null,
    },
    colorAxis: {
      min: 1,
      max: 9,
      stops: [
        [0, "#DB8DFF"],
        [1 / 8, "#CC61FF"],
        [1 / 4, "#B84CEB"],
        [3 / 8, "#8803C7"],
        [1 / 2, "#0B7AB9"],
        [5 / 8, "#1C93D7"],
        [3 / 4, "#3A78E2"],
        [7 / 8, "#455FFF"],
        [1, "#2E48E6"],
      ],
      labels: {
        formatter: function () {
          if (this.value === 1) {
            return "Low Popularity";
          } else if (this.value === 9) {
            return "High Popularity";
          }
          return "";
        },
      },
      tickPositions: [1, 9],
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Peak Interaction Times",
        borderWidth: 1,
        data: seriesData,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };

  const colors = [
    "#DB8DFF",
    "#CC61FF",
    "#B84CEB",
    "#8803C7",
    "#0B7AB9",
    "#1C93D7",
    "#3A78E2",
    "#455FFF",
    "#2E48E6",
  ];

  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}
      >
        <span style={{ marginRight: "10px" }}>Low Popularity</span>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color, flex: 1, height: "20px" }}
          />
        ))}
        <span style={{ marginLeft: "10px" }}>High Popularity</span>
      </div>
    </div>
  );
};

export default FuncHeatMapComponent;
