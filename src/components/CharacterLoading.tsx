import React from "react";
import styled from "styled-components";
export interface CharacterLoadingInterface {}

const CharacterLoading: React.FC<CharacterLoadingInterface> = () => {
  return <CharacterLoadingStyle></CharacterLoadingStyle>;
};

export const CharacterLoadingStyle = styled.div`
  width: 240px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303040;

  animation: characterLoadingAnim 2s ease 0s infinite normal forwards;

  @keyframes characterLoadingAnim {
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }

    15% {
      transform: translateX(-30px) rotate(-6deg);
    }

    30% {
      transform: translateX(15px) rotate(6deg);
    }

    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }

    60% {
      transform: translateX(9px) rotate(2.4deg);
    }

    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }
`;

export default CharacterLoading;
