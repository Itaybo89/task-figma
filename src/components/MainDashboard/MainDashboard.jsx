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
  <div className="dashboard-section">
    <FuncUserInteractionsChart />
  </div>
);

const DurationIndicator = () => (
  <div className="duration-indicator">
    <FuncDurationIndicator />
  </div>
);

const QueriesIndicator = () => (
  <div className="queries-indicator">
    <FuncQueriesIndicator />
  </div>
);

const CompletionRateChart = () => (
  <div className="dashboard-section">
    <FuncCompletionRate />
  </div>
);

const ProductPopularityChart = () => (
  <div className="dashboard-section">
    <FuncProductPopularity />
  </div>
);

const ErrorAnalysisChart = () => (
  <div className="dashboard-section">
    <FuncErrorAnalysis />
  </div>
);

const PeakInteractionTimesChart = () => (
  <div className="dashboard-section">
    <FuncHeatMapComponent />
  </div>
);

const CombinedIndicators = () => (
  <div className="combined-indicators">
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
