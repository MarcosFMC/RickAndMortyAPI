import styled from "styled-components";

export const SCButton = styled.div`
  font-family: "Kanit";
  margin: 1rem;
  text-align: center;
  background-color: transparent;
  border-radius: 3px;
  border: none;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.1s all;

  a {
    text-decoration: none;
  }
  a:hover {
    color: grey;
  }

  &:hover {
    color: grey;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
