import styled from "styled-components";

export const SCCharacterList = styled.div`
  display: grid;
  grid-area: data;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 250px);
  grid-gap: 20px;

  .error-img {
    height: auto;
    width: 30vw;
  }
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 800px) {
  }

  @media screen and (max-width: 600px) {
  }
`;
