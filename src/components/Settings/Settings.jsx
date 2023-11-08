import React from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="overview-set">
      <div className="content-set">
        <img
          className="frame-set"
          alt="Additional Graphic"
          src={`${process.env.PUBLIC_URL}/Resources/frame.png`}
        />
        <p className="description-set">
          We are currently working hard building this page
        </p>
        <button className="home-button-set" onClick={() => navigate("/")}>
          Go home
        </button>
      </div>
    </div>
  );
};
