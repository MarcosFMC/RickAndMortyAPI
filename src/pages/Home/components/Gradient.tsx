import React from "react";
import styled from "styled-components";
export interface GradientInterface {}

const Gradient: React.FC<GradientInterface> = () => {
  return <GradientStyle></GradientStyle>;
};

export const GradientStyle = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: contain;
  object-position: right;
  position: fixed;
  right: 0;
  top: 0;
`;

export default Gradient;
