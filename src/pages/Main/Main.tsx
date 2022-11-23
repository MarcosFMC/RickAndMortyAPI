import { Nav, Pagination } from "@/components";
import { PaginationProvider } from "@/contexts";
import React from "react";
import styled from "styled-components";
import { CharacterList, MainBackground, SearchInput } from "./components";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  return (
    <MainStyle>
      <PaginationProvider>
        <>
          <Nav></Nav>
          <MainBackground />
          <SearchInput />
          <CharacterList />
          <Pagination />
        </>
      </PaginationProvider>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
