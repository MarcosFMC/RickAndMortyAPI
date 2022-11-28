import React from "react";
import { SCMainBackground } from "../styled-components";
export interface MainBackgroundInterface {}

const MainBackground: React.FC<MainBackgroundInterface> = () => {
  return (
    <SCMainBackground>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </SCMainBackground>
  );
};

export default MainBackground;
