import React from "react";
import { SCLoadingCharacter } from "@/styled-components";

export interface ICharacterLoading {}

const LoadingCharacter: React.FC<ICharacterLoading> = () => {
  return <SCLoadingCharacter></SCLoadingCharacter>;
};

export default LoadingCharacter;
