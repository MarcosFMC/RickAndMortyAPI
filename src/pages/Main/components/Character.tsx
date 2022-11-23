import { Modal } from "@/components";
import { APICharacter } from "@/models";
import React, { useState } from "react";
import styled from "styled-components";
import ModalCharacterDescription from "./ModalCharacterDescription";

const Character: React.FC<APICharacter> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CharacterStyle onClick={() => setIsOpen(!isOpen)}>
      <button className="description-btn">CLICK FOR MORE INFO...</button>
      <img src={props.image} alt="" />
      <div className="description">
        <b className={props.status === "Alive" ? "title alive" : "title dead"}>
          {props.name || "Unknown"}
        </b>
        <span className="gender">
          {props.gender || "Unknown"} / {props.species || "Unknown"}
        </span>
        <br />
        {isOpen ? (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalCharacterDescription
              image={props.image}
              status={props.status}
              name={props.name}
              gender={props.gender}
              species={props.species}
              episode={props.episode}
              type={props.type}
              location={props.location}
              origin={props.origin}
            ></ModalCharacterDescription>
          </Modal>
        ) : undefined}
      </div>
    </CharacterStyle>
  );
};

export const CharacterStyle = styled.div`
  position: relative;
  background: rgb(249, 249, 249, 5%);
  transition: all 0.1s;
  cursor: pointer;
  border: thin solid rgb(32, 45, 58);

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgb(249, 249, 249, 30%);
    padding: 1rem;
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

export default Character;
