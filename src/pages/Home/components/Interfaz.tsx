import { HomeTitle } from "@/components";
import React from "react";
import styled from "styled-components";
import ButtonsContainer from "./ButtonsContainer";
export interface InterfazInterface {}

const Interfaz: React.FC<InterfazInterface> = () => {
  return (
    <InterfazStyle>
      <HomeTitle text="The Rick and Morty API"></HomeTitle>
      <ButtonsContainer></ButtonsContainer>
      <p className="text">
        <h2 className="text-title">What is this?</h2>
        The Rick and Morty API is a REST(ish) and GraphQL API based on the
        television show Rick and Morty. You will have access to about hundreds
        of characters, images, locations and episodes. The Rick and Morty API is
        filled with canonical information as seen on the TV show.
      </p>
    </InterfazStyle>
  );
};

export const InterfazStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 50vh;
    width: 50vw;
    text-align: center;
  }
  .text-title {
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    .text-title{
      font-size 1.5rem;
    }
  }  
`;

export default Interfaz;
