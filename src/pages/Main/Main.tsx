import { Nav } from "@/components";
import { CharacterListProvider, PaginationProvider } from "@/contexts";
import RickAndMortyPagination from "@/pages/Main/components/RickAndMortyPagination";
import React from "react";
import {
  CharacterList,
  MainBackground,
  RickAndMortyFilter,
} from "./components";
import { SCMain } from "./styled-components/SCMain";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  return (
    <>
      <Nav />
      <SCMain>
        <PaginationProvider>
          <CharacterListProvider>
            <MainBackground />
            <RickAndMortyFilter />
            <CharacterList />
            <RickAndMortyPagination />
          </CharacterListProvider>
        </PaginationProvider>
      </SCMain>
    </>
  );
};

export default Main;
