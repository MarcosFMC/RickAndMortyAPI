import styled from "styled-components";

export const SCUIButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;

  animation: uiButtonsAnim 1s ease-out 0s 1 normal forwards;

  @keyframes uiButtonsAnim {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
