import styled from "styled-components";

export const SCButtonPagination = styled.button`
  background: rgb(249, 249, 249, 5%);
  padding: 0.5rem 2rem;
  border: thin solid rgb(32, 45, 58);
  border-radius: 0.5rem;
  transition: 0.1s all;
  cursor: pointer;
  font-family: "Kanit";

  &:hover {
    background: rgb(0, 0, 0, 50%);
    border: thin solid rgb(249, 249, 249, 30%);
  }
`;
