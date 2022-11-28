import styled from "styled-components";

export const SCCharacter = styled.div`
  position: relative;
  background: rgb(249, 249, 249, 5%);
  transition: all 0.1s;
  cursor: pointer;
  border: thin solid rgb(32, 45, 58);

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgb(249, 249, 249, 30%);
    border: thin solid rgb(249, 249, 249, 1%);
    .description-btn {
      background: rgb(0, 0, 0, 50%);
      opacity: 100%;
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .description {
    height: max-content;
    overflow: hidden;
    text-align: center;
    color: white;
    position: relative;
  }
  .description-btn {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.5rem 2rem;
    font-family: "Kanit";
    color: rgb(249, 249, 249);
    border: none;
    transition: 0.3s all;
    cursor: pointer;
    opacity: 0%;
  }

  .title {
    display: block;
    color: #161625;
  }

  .alive {
    background-color: #5cb85c;
  }
  .dead {
    background-color: #d9534f;
  }
  .gender {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;
