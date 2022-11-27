import React from "react";
import styled from "styled-components";
import ErrorIMG from "./assets/MainBackground.jpg";
import HomeTitle from "./HomeTitle";
export interface ErrorPageInterface {}

const ErrorPage: React.FC<ErrorPageInterface> = () => {
  return (
    <ErrorPageStyle>
      <HomeTitle
        text="Error 404: Not Found"
        className="error-page_title"
      ></HomeTitle>
      <img
        className="error-page_morty-img"
        src="https://vignette.wikia.nocookie.net/rickandmorty/images/3/3e/Toxic_Rick_Fixed_Transparent_by_Mixo.png/revision/latest?cb=20190519162532"
        alt=""
      />
      <img className="error-page_background-img" src={ErrorIMG} alt="" />
    </ErrorPageStyle>
  );
};

export const ErrorPageStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  animation: errorPageAnim 1s ease 0s 1 normal forwards;

  .error-page_title {
    align-self: center;
  }
  .error-page_morty-img {
    position: absolute;
    z-index: -998;
    width: 500px;
    height: auto;
    filter: brightness(30%);
  }
  .error-page_background-img {
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -999;
    object-fit: contain;
    filter: brightness(40%);
    object-fit: cover;
  }

  @keyframes errorPageAnim {
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

export default ErrorPage;
