import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Character from "./Character";
import { AppStore } from "@/models";
import { ErrorNotFound } from "@/components";

export interface CharacterListInterface {}

const CharacterList: React.FC<CharacterListInterface> = () => {
  const characters = useSelector(
    (state: AppStore) => state.filterCharacters.results
  );
  return (
    <CharacterListStyle>
      {characters === undefined ? (
        <ErrorNotFound></ErrorNotFound>
      ) : (
        characters.map((data) => (
          <Character
            image={data.image}
            status={data.status}
            name={data.name}
            gender={data.gender}
            species={data.species}
            episode={data.episode}
            type={data.type}
            location={data.location}
            origin={data.origin}
          ></Character>
        ))
      )}
    </CharacterListStyle>
  );
};

export const CharacterListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80vw;
  grid-gap: 20px;

  .error-img {
    height: auto;
    width: 30vw;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 200px);
    justify-content: center;
  }
`;

export default CharacterList;
