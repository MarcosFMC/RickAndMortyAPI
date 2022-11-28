import { TitleWithAnimation } from "@/components";
import React from "react";
import { SCUIHome } from "../styled-components";
import UIButtons from "./UIButtons";

export interface InterfazInterface {}

const UIHome: React.FC<InterfazInterface> = () => {
  return (
    <SCUIHome>
      <TitleWithAnimation>The Rick and Morty API</TitleWithAnimation>
      <UIButtons />
      <p className="text">
        <h2 className="text-title">What is this?</h2>
        The Rick and Morty API is a REST(ish) and GraphQL API based on the
        television show Rick and Morty. You will have access to about hundreds
        of characters, images, locations and episodes. The Rick and Morty API is
        filled with canonical information as seen on the TV show.
      </p>
    </SCUIHome>
  );
};

export default UIHome;
