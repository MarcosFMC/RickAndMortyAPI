import { CharacterLoading, ErrorNotFound } from "@/components";
import { CharacterListContext } from "@/contexts";
import { AppStore } from "@/models";
import React, { lazy, Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Character = lazy(() => import("./Character"));

export interface CharacterListInterface {}

const CharacterList: React.FC<CharacterListInterface> = () => {
  const characters = useSelector((state: AppStore) => state.characters.results);
  const { loading, setLoading } = useContext(CharacterListContext);
  return (
    <CharacterListStyle>
      {characters === undefined ? (
        <ErrorNotFound></ErrorNotFound>
      ) : (
        characters.map((data) => (
          <Suspense fallback={<CharacterLoading></CharacterLoading>}>
            <Character
              loading={loading}
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
          </Suspense>
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
