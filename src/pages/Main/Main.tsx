import { BackgroundFormParticles, Nav } from "@/components";
import {
  CharacterListProvider,
  DataModeContext,
  DbPaginationProvider,
  RickAndMortyPaginationProvider,
} from "@/contexts";
import React, { useContext } from "react";
import {
  CharacterList,
  DbFilter,
  DbPagination,
  MainBackground,
  RickAndMortyFilter,
  RickAndMortyPagination,
} from "./components";
import { SCMain } from "./styled-components/SCMain";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  const { dataMode } = useContext(DataModeContext);
  return (
    <>
      <Nav />
      <SCMain>
        <RickAndMortyPaginationProvider>
          <DbPaginationProvider>
            <CharacterListProvider>
              <MainBackground />
              <BackgroundFormParticles />
              <CharacterList />
              {dataMode === "rickandmorty" ? (
                <>
                  <RickAndMortyFilter />
                  <RickAndMortyPagination />
                </>
              ) : (
                <>
                  <DbFilter />
                  <DbPagination />
                </>
              )}
            </CharacterListProvider>
          </DbPaginationProvider>
        </RickAndMortyPaginationProvider>
      </SCMain>
    </>
  );
};

export default Main;
