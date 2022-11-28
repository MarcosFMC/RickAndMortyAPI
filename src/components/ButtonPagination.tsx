import { SCButtonPagination } from "@/styled-components";
import React from "react";
export interface IButtonPagination {
  onClick: any;
  type: boolean;
}

const ButtonPagination: React.FC<IButtonPagination> = ({ onClick, type }) => {
  return (
    <SCButtonPagination onClick={onClick}>
      {type ? "NEXT" : "PREV"}
    </SCButtonPagination>
  );
};

export default ButtonPagination;
