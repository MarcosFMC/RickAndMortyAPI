import { BackgroundParticles } from "@/components";
import React from "react";
import { UIHome } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <BackgroundParticles />
      <UIHome />
    </div>
  );
};

export default Home;
