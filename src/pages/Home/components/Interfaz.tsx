import { HomeTitle, MainPageButton } from "@/components";
import React from "react";
import styled from "styled-components";
import ButtonsContainer from "./ButtonsContainer";
export interface InterfazInterface {}

const Interfaz: React.FC<InterfazInterface> = () => {
  return (
    <InterfazStyle>
      <HomeTitle></HomeTitle>
      <ButtonsContainer></ButtonsContainer>
    </InterfazStyle>
  );
};

export const InterfazStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 100vh;
`;

export default Interfaz;
