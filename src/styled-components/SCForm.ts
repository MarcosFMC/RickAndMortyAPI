import styled from "styled-components";

export const SCForm = styled.form`
  background: #161625;
  label {
    display: block;
    margin-left: 0.5rem;
  }
  input {
    color: white;
    padding: 0.5rem;
    margin: 0.5rem;
    background: rgb(239, 239, 239, 10%);
    border: none;

    &::placeholder {
      color: rgb(239, 239, 239, 90%);
    }
    &:focus {
      outline: 1px solid #5ba4fb;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 1000px #f6e95d50 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  select {
    padding: 0.5rem;
    margin: 0.5rem;
    background: rgb(239, 239, 239, 50%);
    &:focus {
      outline: 1px solid #5ba4fb;
    }
  }

  input[type="submit"] {
    display: block;
    color: white;
    border-radius: 3px;
    padding: 0.5rem 1.5rem;
    background: rgb(239, 239, 239, 50%);
    transition: all 0.1s;

    &:hover {
      background-color: #f6e95d50;
    }
  }
`;
