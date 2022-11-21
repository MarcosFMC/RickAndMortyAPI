import React from "react";
import { Background, Gradient, Interfaz } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <Background />
      <Gradient></Gradient>
      <Interfaz></Interfaz>
    </>
  );
};

export default Home;
