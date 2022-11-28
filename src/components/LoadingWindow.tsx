import { SCLoadingWindow } from "@/styled-components";
import React from "react";

export interface ILoadingWindow {}

const LoadingWindow: React.FC<ILoadingWindow> = () => {
  return (
    <SCLoadingWindow>
      <div className="loader loader-1">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    </SCLoadingWindow>
  );
};

export default LoadingWindow;
