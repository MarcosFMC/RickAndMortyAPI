import React from "react";
import { SCHomeTitle } from "@/styled-components";

export interface IHomeTitle {
  children: string;
}

const TitleWithAnimation: React.FC<IHomeTitle> = ({ children }) => {
  return <SCHomeTitle>{children}</SCHomeTitle>;
};

export default TitleWithAnimation;
