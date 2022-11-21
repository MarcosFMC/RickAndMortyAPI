import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Character from "./Character";
import { AppStore } from "@/models";
export interface CharacterListInterface {}

const CharacterList: React.FC<CharacterListInterface> = () => {
  const characters = useSelector((state: AppStore) => state.filterCharacters);
  return (
    <CharacterListStyle>
      {characters.map((data) => (
        <Character
          image={data.image}
          name={data.name}
          status={data.status}
          species={data.species}
          gender={data.gender}
        ></Character>
      ))}
    </CharacterListStyle>
  );
};

export const CharacterListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80vw;
  grid-gap: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CharacterList;
