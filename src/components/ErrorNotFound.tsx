import React from "react";
import styled from "styled-components";
import CharacterNotFound from "../pages/Main/assets/CharacterNotFound.png";
export interface ErrorInterface {}

const ErrorNotFound: React.FC<ErrorInterface> = () => {
  return (
    <ErrorStyle>
      <h2>Character not found</h2>
      <img className="error-img" src={CharacterNotFound} alt="Error IMG" />
    </ErrorStyle>
  );
};

export const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export default ErrorNotFound;
