import React from "react";
import styled from "styled-components";
export interface HomeTitleInterface {}

const HomeTitle: React.FC<HomeTitleInterface> = () => {
  return <HomeTitleStyle>RICK-MORTY</HomeTitleStyle>;
};

export const HomeTitleStyle = styled.h2`
 

  font-size: 100px;
  animation-name:startAnimation;
  animation-duration:1s;
  animation-fill-mode: forwards;
  transform:translateY(-400px);
  

  @keyframes startAnimation {
    100% {transform: translateY(0px);}
  }

  @media screen and (max-width: 800px) {
	font-size 50px;
  }
`;

export default HomeTitle;
