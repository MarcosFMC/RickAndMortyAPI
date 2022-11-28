import { Nav, Pagination } from "@/components";
import { CharacterListProvider, PaginationProvider } from "@/contexts";
import { getCharacters } from "@/redux";
import React, { useEffect } from "react";
import styled from "styled-components";
import { CharacterList, MainBackground, SearchCharacter } from "./components";
import { getAllCharacters, GetFetch } from "./services";
import { useDispatch } from "react-redux";
import { SCMain } from "./styled-components/SCMain";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  const dispatch = useDispatch();

  const setCharacters = async () => {
    const data = await GetFetch(getAllCharacters);
    dispatch(getCharacters(data));
  };
  useEffect(() => {
    setCharacters();
  }, []);

  return (
    <SCMain>
      <PaginationProvider>
        <CharacterListProvider>
          <>
            <Nav />
            <MainBackground />
            <SearchCharacter />
            <CharacterList />
            <Pagination />
          </>
        </CharacterListProvider>
      </PaginationProvider>
    </SCMain>
  );
};

export default Main;
