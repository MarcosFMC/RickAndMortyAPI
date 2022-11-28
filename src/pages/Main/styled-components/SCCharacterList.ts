import styled from "styled-components";

export const SCCharacterList = styled.div`
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
