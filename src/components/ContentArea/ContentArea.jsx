import React from "react";
import { Routes, Route } from "react-router-dom";
import "./contentArea.css";
import { NavigationSidebar } from "../NavigationSidebar/NavigationSidebar";
import { UpperSidebar } from "../UpperSidebar/UpperSidebar";
import { Settings } from "../Settings/Settings";
import MainDashboard from "../MainDashboard/MainDashboard";

function ContentArea() {
  return (
    <div className="content-area">
      <div className="nav-up">
      <UpperSidebar />
      </div>
      <div className="nav-side">
      <NavigationSidebar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContentArea;