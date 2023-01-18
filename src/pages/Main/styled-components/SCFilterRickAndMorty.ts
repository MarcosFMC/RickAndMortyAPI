import { SCForm } from "@/styled-components";
import styled from "styled-components";

export const SCFilterRickAndMorty = styled(SCForm)`
  grid-area: filter;
  background-color: green;
  border-radius: 3px;
  background-color: #161625;
  text-align: center;
  height: 500px;
  input,
  select {
    display: block;
    margin: 0.5rem auto;
  }
  .buttons-container {
    display: flex;
    justify-content: flex-end;
  }
`;
