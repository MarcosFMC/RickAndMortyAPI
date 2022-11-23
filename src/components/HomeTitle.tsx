import React from "react";
import styled from "styled-components";
export interface HomeTitleInterface {}

const HomeTitle: React.FC<HomeTitleInterface> = () => {
  return <HomeTitleStyle>The Rick and Morty API</HomeTitleStyle>;
};

export const HomeTitleStyle = styled.h2`
 

  font-size: 100px;
  font-weight:500;
  animation-name:startAnimation;
  animation-duration:1s;
  animation-fill-mode: forwards;
  transform:translateY(-400px);
  

  @keyframes startAnimation {
    100% {transform: translateY(0px);}
  }

  @media screen and (max-width: 1200px) {
    font-size 70px;
  }
  @media screen and (max-width: 800px) {
	font-size 40px;
  }

`;

export default HomeTitle;
