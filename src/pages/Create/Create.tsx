import { Nav } from "@/components";
import React from "react";
import { BackgroundVideo } from "../Home";
import { CreateForm } from "./components";
import { SCStore } from "./styled-components";
export interface ICreate {}

const Create: React.FC<ICreate> = () => {
  return (
    <SCStore>
      <Nav />
      <h2>Create character</h2>
      <CreateForm />
      <BackgroundVideo />
    </SCStore>
  );
};

export default Create;
