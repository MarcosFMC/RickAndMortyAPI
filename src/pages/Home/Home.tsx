import React from "react";
import { BackgroundVideo, UIHome } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <BackgroundVideo />
      <UIHome />
    </div>
  );
};

export default Home;
