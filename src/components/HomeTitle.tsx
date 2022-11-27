import React from "react";
import styled from "styled-components";
export interface HomeTitleInterface {
  text: string;
  className?: string;
}

const HomeTitle: React.FC<HomeTitleInterface> = ({ text, className }) => {
  return <HomeTitleStyle className={className}>{text}</HomeTitleStyle>;
};

export const HomeTitleStyle = styled.h2`
 

  font-size: 100px;
  font-weight:500;
  animation-name:startAnimation;
  animation-duration:1s;
  animation-fill-mode: forwards;
  transform:translateY(-400px);
  
  animation: myAnim 1s ease-out 0s 1 normal forwards;

  @keyframes myAnim {
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

  @media screen and (max-width: 1200px) {
    font-size 70px;
  }
  @media screen and (max-width: 800px) {
	font-size 40px;
  }

`;

export default HomeTitle;
