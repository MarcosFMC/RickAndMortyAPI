import styled from "styled-components";

export const SCModalCharacterDescription = styled.div`
  height: max-content;
  width: 40vw;
  background-color: rgb(32, 45, 58);
  color: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-and-icon {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .modal-close-icon {
    font-size: 2rem;
    margin: 1rem;
    transition: 0.1s all;
  }
  .modal-close-icon:hover {
    color: grey;
  }
  .modal-info {
    width: 80%;
  }
  .modal-location {
    color: grey;
    margin-bottom: 1rem;
  }
  .modal-title {
    align-self: center;
    margin-left: 1rem;
  }
  .modal-img {
    width: 100px;
    height: auto;
    object-fit: cover;
    margin: 1rem auto;
    border-radius: 50%;
  }
  .modal-name {
    color: #5ba4fb;
    font-size: 2em;
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
  }
`;
