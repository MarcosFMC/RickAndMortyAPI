import styled from "styled-components";

export const SCNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100vw;
  background: #161625;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

  .nav-title {
    padding: 0px 2rem;
  }

  .rick-icon {
    height: auto;
    width: 2rem;
  }

  @media screen and (max-width: 1200px) {
    .rick-icon {
      display: none;
    }
  }
`;
