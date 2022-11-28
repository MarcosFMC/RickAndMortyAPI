import { ButtonRoutes } from "@/components";
import { HiArrowLeft } from "react-icons/hi";
import React from "react";
import { SCNav } from "@/styled-components";

export interface INav {}

const rickIcon =
  "https://icon-library.com/images/rick-sanchez-icon/rick-sanchez-icon-28.jpg";

const Nav: React.FC<INav> = () => {
  return (
    <SCNav>
      <ButtonRoutes path="/RickAndMortyAPI">
        <HiArrowLeft />
      </ButtonRoutes>
      <img className="rick-icon" src={rickIcon} alt="Rick" />
      <p className="nav-title">CHARACTERS</p>
    </SCNav>
  );
};

export default Nav;
