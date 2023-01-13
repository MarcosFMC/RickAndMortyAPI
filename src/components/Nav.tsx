import { ButtonNav, ButtonRoutes } from "@/components";
import { SCButtonNavContainer, SCNav } from "@/styled-components";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

export interface INav {}

const rickIcon =
  "https://icon-library.com/images/rick-sanchez-icon/rick-sanchez-icon-28.jpg";

const Nav: React.FC<INav> = () => {
  return (
    <SCNav>
      <img className="rick-icon" src={rickIcon} alt="Rick" />
      <SCButtonNavContainer>
        <ButtonNav path="/main">
          <span>Main</span>
        </ButtonNav>
        <ButtonNav path="/create">
          <span>Create</span>
        </ButtonNav>
      </SCButtonNavContainer>
    </SCNav>
  );
};

export default Nav;
