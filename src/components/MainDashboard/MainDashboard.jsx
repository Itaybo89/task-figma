import React from "react";
import "./MainDashboard.css";
import FuncUserInteractionsChart from "../UserInteractionsChart/FuncUserInteractionsChart";
import FuncProductPopularity from "../ProductPopularity/FuncProductPopularity";
import FuncHeatMapComponent from "../HeatMap/FuncHeatMapComponent";
import FuncErrorAnalysis from "../ErrorAnalysis/FuncErrorAnalysisChart";
import FuncDurationIndicator from "../DurationIndicator/FuncDurationIndicator";
import FuncQueriesIndicator from "../QueriesIndicator/FuncQueriesIndicator";
import FuncCompletionRate from "../CompletionRate/FuncCompletionRate";

const UserInteractionsChart = () => (
  <div className="dashboard-section group-1">
    <FuncUserInteractionsChart />
  </div>
);

const DurationIndicator = () => (
  <div className="duration-indicator group-1">
    <FuncDurationIndicator />
  </div>
);

const QueriesIndicator = () => (
  <div className="queries-indicator group-1">
    <FuncQueriesIndicator />
  </div>
);

const CompletionRateChart = () => (
  <div className="dashboard-section group-1">
    <FuncCompletionRate />
  </div>
);

const ProductPopularityChart = () => (
  <div className="dashboard-section group-1">
    <FuncProductPopularity />
  </div>
);

const ErrorAnalysisChart = () => (
  <div className="dashboard-section group-2">
    <FuncErrorAnalysis />
  </div>
);

const PeakInteractionTimesChart = () => (
  <div className="dashboard-section group-2">
    <FuncHeatMapComponent />
  </div>
);

const CombinedIndicators = () => (
  <div className="combined-indicators group-1">
    <div className="indicator duration-indicator">
      <DurationIndicator />
    </div>
    <div className="indicator queries-indicator">
      <QueriesIndicator />
    </div>
  </div>
);

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <UserInteractionsChart />
      <CombinedIndicators />
      <CompletionRateChart />
      <ProductPopularityChart />
      <ErrorAnalysisChart />
      <PeakInteractionTimesChart />
    </div>
  );
};

export default MainDashboard;
