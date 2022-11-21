import React from "react";
import styled from "styled-components";
export interface CharacterInterface {
  image: string;
  status: string;
  name: string;
  gender: string;
  species: string;
}
const Character: React.FC<CharacterInterface> = (props) => {
  return (
    <CharacterStyle>
      <img src={props.image} alt="" />
      <div className="description">
        <b className={props.status === "Alive" ? "title alive" : "title dead"}>
          {props.name || "Unknown"}
        </b>

        <span className="gender">
          {props.gender || "Unknown"}/{props.species || "Unknown"}
        </span>
        <br />
      </div>
    </CharacterStyle>
  );
};

export const CharacterStyle = styled.div`
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  background: rgb(249, 249, 249, 5%);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgb(249, 249, 249, 30%);
    padding: 1rem;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .description {
    height: 50px;
    overflow: hidden;
    text-align: center;
    font-size: 15px;
    color: black;
    position: relative;
  }

  .title {
    display: block;
    color: #f9f9f9;
  }

  .alive {
    background-color: #5cb85c;
  }
  .dead {
    background-color: #d9534f;
  }
  .gender {
    font-size: 15px;
  }
`;

export default Character;
