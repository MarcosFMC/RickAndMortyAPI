import React from "react";
import { SCMainBackground } from "../styled-components";
export interface IMainBackground {}

const MainBackground: React.FC<IMainBackground> = () => {
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
