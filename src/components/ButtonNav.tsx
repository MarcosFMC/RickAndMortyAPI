import { SCButtonNav } from "@/styled-components";
import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
export interface IButtonNav {
  path: string;
  children: ReactElement;
}

const ButtonNav: React.FC<IButtonNav> = ({ path, children }) => {
  return (
    <SCButtonNav>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "activate-button " : undefined
        }
      >
        {children}
      </NavLink>
    </SCButtonNav>
  );
};

export default ButtonNav;
