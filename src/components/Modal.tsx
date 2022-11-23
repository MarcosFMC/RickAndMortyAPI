import React from "react";
import styled from "styled-components";

export interface ModalInterface {
  isOpen: boolean;
  setIsOpen: any;
  children: any;
}

const Modal: React.FC<ModalInterface> = (props) => {
  return (
    <ModalStyle onClick={() => props.setIsOpen(!props.isOpen)}>
      {props.children}
    </ModalStyle>
  );
};

export const ModalStyle = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: openAnimation;
  animation-duration: 0.2s;

  @keyframes openAnimation {
    0% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0px);
    }
  }
`;

export default Modal;
