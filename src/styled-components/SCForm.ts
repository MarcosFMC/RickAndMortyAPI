import styled from "styled-components";

export const SCForm = styled.form`
  border-radius: 3px;

  h2 {
    padding: 0.5rem;
    background: #272743;
  }
  label {
    display: block;
    margin-left: 0.5rem;
  }
  input {
    color: white;
    padding: 0.5rem;
    margin: 0.5rem;
    background: #1a1a2d;
    border: none;
    border-radius: 3px;

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
    background: #1a1a2d;
    border: none;
    color: white;
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

  input[type="button"] {
    display: block;
    color: white;
    border-radius: 3px;
    padding: 0.5rem 1.5rem;
    background: rgb(239, 239, 239, 50%);
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
      background-color: #f6e95d50;
    }
  }
`;
