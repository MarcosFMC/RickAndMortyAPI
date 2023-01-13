import styled from "styled-components";

export const SCUIHome = styled.div`
  position:fixed;
  z-index:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 50vh;
    width: 50vw;
    text-align: center;
  }
  .text-title {
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    .text-title{
      font-size 1.5rem;
    }
  }  
`;
