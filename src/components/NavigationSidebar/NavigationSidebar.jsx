import React from "react";

import "./NavigationSidebar.css";
import { useNavigate } from "react-router-dom";

import { VuesaxLinearMessages } from "../../icons/VuesaxLinearMessages";
import { VuesaxLinearChart1 } from "../../icons/VuesaxLinearChart1";
import { VuesaxLinearLogout1 } from "../../icons/VuesaxLinearLogout1";
import { VuesaxLinearSetting2 } from "../../icons/VuesaxLinearSetting2";
import { VuesaxBoldHome1 } from "../../icons/VuesaxBoldHome1";

export const NavigationSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <VuesaxBoldHome1 className="icon-instance-node" />
            <div className="text-wrapper" onClick={() => navigate("/")}>
              Dashboard
            </div>
          </div>
        </div>
        <div className="div" onClick={() => navigate("/chats")}>
          <VuesaxLinearMessages className="icon-instance-node" />
          <div className="text-wrapper-2">Chats</div>
        </div>
        <div className="group-2" onClick={() => navigate("/advanceanalytics")}>
          <VuesaxLinearChart1 className="icon-instance-node" />
          <div className="text-wrapper-3">Advance Analytics</div>
        </div>
        <div className="group-3" onClick={() => navigate("/logout")}>
          <VuesaxLinearLogout1 className="icon-instance-node" />
          <div className="text-wrapper-3">Logout</div>
        </div>
        <div className="group-4" onClick={() => navigate("/settings")}>
          <VuesaxLinearSetting2 className="icon-instance-node" />
          <div className="text-wrapper-3">Settings</div>
        </div>
      </div>
    </div>
  );
};
