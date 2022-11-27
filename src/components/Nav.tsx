import { Button } from "@/components";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import styled from "styled-components";

export interface NavInterface {}

const Nav: React.FC<NavInterface> = () => {
  return (
    <NavStyle>
      <Button
        isNavLink={true}
        name={<HiArrowLeft className="arrow-left"></HiArrowLeft>}
        link="/RickAndMortyAPI"
      ></Button>
      <img
        className="rick-icon"
        src="https://icon-library.com/images/rick-sanchez-icon/rick-sanchez-icon-28.jpg"
        alt=""
      />
      <p className="nav-title">CHARACTERS</p>
    </NavStyle>
  );
};

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100vw;
  background: #161625;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

  .nav-title {
    padding: 0px 2rem;
  }

  .arrow-left {
    margin: 0px 1rem;
  }

  .rick-icon {
    height: auto;
    width: 2rem;
  }

  @media screen and (max-width: 1200px) {
    .rick-icon {
      display: none;
    }
  }
`;

export default Nav;
