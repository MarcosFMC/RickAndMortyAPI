import styled from "styled-components";

export const SCPagination = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;

  .characters-found-text {
    margin: 1rem;
    text-align: center;
  }
  .pages-text {
    display: block;
    margin: 1rem;
  }

  .pages-text b {
    background: rgb(249, 249, 249, 5%);
    padding: 0px 1rem;
  }
`;
