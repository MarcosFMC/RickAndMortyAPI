import styled from "styled-components";

export const SCMain = styled.div`
  display: grid;
  margin: 6rem 6rem 2rem 6rem;
  grid-template-areas:
    "filter data data"
    "filter data data"
    "footer footer footer";
  grid-template-rows: 750px 300px;
  grid-template-columns: 300px 700px;
  grid-gap: 1rem;
`;
