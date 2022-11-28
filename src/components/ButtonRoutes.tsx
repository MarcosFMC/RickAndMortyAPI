import { SCButton } from "@/styled-components";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface IButtonRoutes {
  path: string;
  children: ReactJSXElement;
}

const ButtonRoutes: React.FC<IButtonRoutes> = ({ path, children }) => {
  const navigate = useNavigate();

  const HandleOnClick = () => {
    navigate(path);
  };

  return <SCButton onClick={HandleOnClick}>{children}</SCButton>;
};

export default ButtonRoutes;
