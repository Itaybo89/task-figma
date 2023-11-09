import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FuncUserInteractionsChart = () => {
  const options = {
    chart: {
      type: "column",
      height: 325,
      width: 650,
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
        groupPadding: 0.2,
        borderWidth: 20,
        borderRadius: 15,
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

  return (
    <div
      id="popularity-div"
      style={{ height: "325", width: "650", zIndex: "9999" }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default FuncUserInteractionsChart;
