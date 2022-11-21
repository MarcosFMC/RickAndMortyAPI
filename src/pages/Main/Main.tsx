import { Nav, Pagination } from "@/components";
import React from "react";
import styled from "styled-components";
import { CharacterList, MainBackground, SearchInput } from "./components";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  return (
    <MainStyle>
      <Nav></Nav>
      <MainBackground></MainBackground>
      <SearchInput />

      <CharacterList></CharacterList>
      <Pagination></Pagination>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
