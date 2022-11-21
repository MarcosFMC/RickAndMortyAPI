import React from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/HomeBackgroundVideo.mp4";

export interface BackgroundInterface {}

const Background: React.FC<BackgroundInterface> = () => {
  return <BackgroundStyle src={BackgroundVideo} autoPlay loop muted />;
};

export const BackgroundStyle = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  filter: brightness(0.3);
`;

export default Background;
