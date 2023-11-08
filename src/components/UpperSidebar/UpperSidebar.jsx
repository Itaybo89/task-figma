import React from "react";

import "./UpperSidebar.css";
import { VuesaxBoldSearchNormal } from "../../icons/VuesaxBoldSearchNormal";
import { VuesaxBoldNotification } from "../../icons/VuesaxBoldNotification";

export const UpperSidebar = () => {
  return (
    <div className="overview">
      <div className="div">
        <div className="overlap">
          <img className="line" alt="Line" src="line-1.svg" />
          <div className="group" />
          <div className="vuesax-bold-wrapper">
            <VuesaxBoldNotification className="vuesax-bold" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">Search</div>
              <img className="img" alt="Line" src="image.svg" />
              <VuesaxBoldSearchNormal className="vuesax-bold-search" />
            </div>
          </div>
          <img
            className="colorful"
            alt="Colorful"
            src={`${process.env.PUBLIC_URL}/Resources/colorful-1-1.png`}
          />
          <div className="text-wrapper-2">DASHBOARD</div>
        </div>
        <div className="subtract-wrapper">
          <img className="subtract" alt="Subtract" src="subtract.svg" />
        </div>
      </div>
    </div>
  );
};
