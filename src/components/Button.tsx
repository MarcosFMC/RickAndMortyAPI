import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export interface ButtonInterface {
  name: any;
  isNavLink: boolean;
  link?: any;
}

const Button: React.FC<ButtonInterface> = (props) => {
  const navigate = useNavigate();

  const HandleOnClick = () => {
    navigate(props.link);
  };

  return (
    <ButtonStyle onClick={props.isNavLink ? HandleOnClick : undefined}>
      {props.isNavLink ? (
        props.name
      ) : (
        <a href={props.link} target="_blank">
          {props.name}
        </a>
      )}
    </ButtonStyle>
  );
};

export const ButtonStyle = styled.button`
  font-family: "Kanit";
  height: 3rem;
  text-align: center;
  background-color: transparent;
  border-radius: 3px;
  border: none;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.1s all;

  a {
    text-decoration: none;
  }
  a:hover {
    color: grey;
  }

  &:hover {
    color: grey;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export default Button;
