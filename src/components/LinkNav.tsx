import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export interface LinkNavInterface {
  name: string;
  to: string;
}

const LinkNav: React.FC<LinkNavInterface> = (props) => {
  return (
    <LinkNavStyle>
      <NavLink className="nav" to={props.to}>
        {props.name}
      </NavLink>
    </LinkNavStyle>
  );
};

export const LinkNavStyle = styled.a`
  padding: 1rem;
  .nav {
    text-decoration: none;
  }
`;

export default LinkNav;
