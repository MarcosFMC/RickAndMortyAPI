import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SCModal } from "@/styled-components";

export interface IModal {
  isOpen: boolean;
  setIsOpen: any;
  children: ReactJSXElement;
}

const Modal: React.FC<IModal> = ({ isOpen, setIsOpen, children }) => {
  return <SCModal onClick={() => setIsOpen(!isOpen)}>{children}</SCModal>;
};

export default Modal;
