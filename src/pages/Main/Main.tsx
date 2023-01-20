import { BackgroundFormParticles, Nav } from "@/components";
import {
  CharacterListProvider,
  DataModeProvider,
  PaginationProvider,
} from "@/contexts";
import RickAndMortyPagination from "@/pages/Main/components/RickAndMortyPagination";
import React from "react";
import {
  CharacterList,
  DataModeSwitcher,
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
        <DataModeProvider>
          <PaginationProvider>
            <CharacterListProvider>
              <BackgroundFormParticles />
              <MainBackground />
              <RickAndMortyFilter />
              <CharacterList />
              <RickAndMortyPagination />
            </CharacterListProvider>
          </PaginationProvider>
        </DataModeProvider>
      </SCMain>
    </>
  );
};

export default Main;
