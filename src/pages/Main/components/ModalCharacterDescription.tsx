import { APICharacter } from "@/models";
import { ModalHighlightText } from "@/styled-components";
import { IoIosClose } from "react-icons/io";
import React from "react";
import styled from "styled-components";

const ModalCharacterDescription: React.FC<APICharacter> = (props) => {
  return (
    <ModalCharacterDescriptionStyle>
      <div className="title-and-icon">
        <h2 className="modal-title">Character Detail</h2>
        <IoIosClose className="modal-close-icon"></IoIosClose>
      </div>
      <img className="modal-img" src={props.image} alt="" />
      <p className="modal-info">
        {props.gender === "Male" ? " He" : " She"} is an
        <ModalHighlightText>
          {`${
            props.species === "Human"
              ? ` ${props.species}👨`
              : ` ${props.species}👽`
          }` || " unknown❓"}
        </ModalHighlightText>{" "}
        species whose origin is
        <ModalHighlightText>
          {` ${props.origin.name}` || " unknown❓"}.
        </ModalHighlightText>
        {props.gender === "Male" ? " He" : " She"} is currently{" "}
        <ModalHighlightText>
          {`${
            props.status === "Alive" ? `${props.status}🌱` : `${props.status}🥀`
          }`}
          .
        </ModalHighlightText>
      </p>
      <b className="modal-name">{props.name || " unknown❓"}</b>
      <span className="modal-location">
        {props.location.name || " unknown❓"}
      </span>
    </ModalCharacterDescriptionStyle>
  );
};

export const ModalCharacterDescriptionStyle = styled.div`
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

export default ModalCharacterDescription;
