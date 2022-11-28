import { APICharacter } from "@/models";
import { ModalHighlightText } from "@/styled-components";
import { IoIosClose } from "react-icons/io";
import React from "react";
import { SCModalCharacterDescription } from "../styled-components";

const ModalCharacterDescription: React.FC<APICharacter> = (character) => {
  return (
    <SCModalCharacterDescription>
      <div className="title-and-icon">
        <h2 className="modal-title">Character Detail</h2>
        <IoIosClose className="modal-close-icon"></IoIosClose>
      </div>
      <img className="modal-img" src={character.image} alt="" />
      <p className="modal-info">
        {character.gender === "Male" ? " He" : " She"} is an
        <ModalHighlightText>
          {`${
            character.species === "Human"
              ? ` ${character.species}👨`
              : ` ${character.species}👽`
          }` || " unknown❓"}
        </ModalHighlightText>{" "}
        species whose origin is
        <ModalHighlightText>
          {` ${character.origin.name}` || " unknown❓"}.
        </ModalHighlightText>
        {character.gender === "Male" ? " He" : " She"} is currently{" "}
        <ModalHighlightText>
          {`${
            character.status === "Alive"
              ? `${character.status}🌱`
              : `${character.status}🥀`
          }`}
          .
        </ModalHighlightText>
      </p>
      <b className="modal-name">{character.name || " unknown❓"}</b>
      <span className="modal-location">
        {character.location.name || " unknown❓"}
      </span>
    </SCModalCharacterDescription>
  );
};

export default ModalCharacterDescription;
