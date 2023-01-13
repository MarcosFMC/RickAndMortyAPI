import { SCButton } from "@/styled-components";
import React from "react";

export interface IButtonLinks {
  link: string;
  children: string;
}

const ButtonLinks: React.FC<IButtonLinks> = ({ link, children }) => {
  return (
    <SCButton>
      <a href={link} target="_blank">
        {children}
      </a>
    </SCButton>
  );
};

export default ButtonLinks;
