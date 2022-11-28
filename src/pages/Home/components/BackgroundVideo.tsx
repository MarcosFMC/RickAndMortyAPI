import React from "react";
import RickAndMortyVideo from "../assets/HomeBackgroundVideo.mp4";
import { SCBackgroundVideo } from "../styled-components";

export interface IBackground {}

const BackgroundVideo: React.FC<IBackground> = () => {
  return <SCBackgroundVideo src={RickAndMortyVideo} autoPlay loop muted />;
};

export default BackgroundVideo;
