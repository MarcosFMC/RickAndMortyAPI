import { SCForm } from "@/styled-components";
import styled from "styled-components";

export const SCFilterRickAndMorty = styled(SCForm)`
  grid-area: filter;
  border-radius: 3px;
  text-align: center;
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
