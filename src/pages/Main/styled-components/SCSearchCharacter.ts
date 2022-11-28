import styled from "styled-components";

export const SCSearchCharacter = styled.div`
  margin: 5rem auto;
  display: flex;
  align-items: center;
  color: #f9f9f9;

  .form-input {
    color: #f9f9f9;
    background: #303040;
    border: none;
    font-family: "Kanit";
    font-size: 1rem;
    font-weight: 300;
    width: 40vw;
    padding: 0.6rem;
  }

  .form-icon {
    background: #303040;
    font-size: 1.5rem;
    height: 43px;
    padding: 0rem 1rem;
  }

  .form-input::placeholder {
    color: grey;
  }
  .form-input:focus {
    color: #f9f9f9;
    outline: none;
  }
`;
