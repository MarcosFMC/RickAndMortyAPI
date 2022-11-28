import { SCErrorCharacterNotFound, SCH2 } from "@/styled-components";
import React from "react";
import CharacterNotFound from "../pages/Main/assets/CharacterNotFound.png";

export interface IErrorCharacterNotFound {}

const ErrorCharacterNotFound: React.FC<IErrorCharacterNotFound> = () => {
  return (
    <SCErrorCharacterNotFound>
      <SCH2>Character not found</SCH2>
      <img className="error-img" src={CharacterNotFound} alt="Error IMG" />
    </SCErrorCharacterNotFound>
  );
};

export default ErrorCharacterNotFound;
