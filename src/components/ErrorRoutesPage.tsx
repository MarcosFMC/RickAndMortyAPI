import { SCErrorRoutesPage, SCH2 } from "@/styled-components";
import React from "react";
import background from "./assets/MainBackground.jpg";
export interface IErrorRoutesPage {}

const morty =
  "https://vignette.wikia.nocookie.net/rickandmorty/images/3/3e/Toxic_Rick_Fixed_Transparent_by_Mixo.png/revision/latest?cb=20190519162532";

const ErrorRoutesPage: React.FC<IErrorRoutesPage> = () => {
  return (
    <SCErrorRoutesPage>
      <SCH2 className="error-routes_title">Error 404: Not found</SCH2>
      <img className="error-routes_morty-img" src={morty} alt="Morty IMG" />
      <img
        className="error-routes_background-img"
        src={background}
        alt="Background"
      />
    </SCErrorRoutesPage>
  );
};

export default ErrorRoutesPage;
