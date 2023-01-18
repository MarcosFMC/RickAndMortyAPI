import styled from "styled-components";

export const SCLoadingCharacter = styled.div`
  width: 1fr;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303040;

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 250px;
  }

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
