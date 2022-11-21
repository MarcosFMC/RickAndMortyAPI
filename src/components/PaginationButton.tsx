import React from "react";
import styled from "styled-components";
export interface PaginationButtonInterface {
  onClick: any;
  type: boolean;
}

const PaginationButton: React.FC<PaginationButtonInterface> = (props) => {
  return (
    <PaginationButtonStyle onClick={props.onClick}>
      {props.type ? "NEXT" : "PREV"}
    </PaginationButtonStyle>
  );
};

export const PaginationButtonStyle = styled.button`
  background: radial-gradient(
    circle at 10% 20%,
    rgb(90, 92, 106) 0%,
    rgb(32, 45, 58) 81.3%
  );
  border: none;
  transition: 0.1s all;
  cursor: pointer;
  font-family: "Kanit";

  &:hover {
    color: grey;
  }
`;

export default PaginationButton;
