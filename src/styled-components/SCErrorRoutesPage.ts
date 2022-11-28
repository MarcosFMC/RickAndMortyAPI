import styled from "styled-components";

export const SCErrorRoutesPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  animation: errorRoutesAnim 1s ease 0s 1 normal forwards;

  .error-routes_title {
    align-self: center;
  }
  .error-routes_morty-img {
    position: absolute;
    z-index: -998;
    width: 500px;
    height: auto;
    filter: brightness(30%);
  }
  .error-routes_background-img {
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -999;
    object-fit: contain;
    filter: brightness(40%);
    object-fit: cover;
  }

  @keyframes errorRoutesAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }

    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0);
    }

    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px);
    }

    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }

    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }

    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }
`;
