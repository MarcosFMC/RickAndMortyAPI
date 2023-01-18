import { LoadingCharacter, Modal } from "@/components";
import { CharacterListContext } from "@/contexts";
import { Character } from "@/models";
import React, { useContext, useState } from "react";
import { SCCharacter } from "../styled-components";
import ModalCharacterDescription from "./ModalCharacterDescription";

const CharacterCard: React.FC<Character> = (character: Character) => {
  const [isOpen, setIsOpen] = useState(false);

  const { loading } = useContext(CharacterListContext);

  return (
    <SCCharacter onClick={() => setIsOpen(!isOpen)}>
      {loading ? (
        <LoadingCharacter />
      ) : (
        <>
          <button className="description-btn">CLICK FOR MORE INFO...</button>
          <img src={character.image} alt="" />
          <div className="description">
            <b
              className={
                character.status === "Alive" ? "title alive" : "title dead"
              }
            >
              {character.name || "Unknown"}
            </b>
            <span className="gender">
              {character.gender || "Unknown"} / {character.species || "Unknown"}
            </span>
            <br />
            {isOpen ? (
              <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <ModalCharacterDescription
                  {...character}
                ></ModalCharacterDescription>
              </Modal>
            ) : undefined}
          </div>
        </>
      )}
    </SCCharacter>
  );
};

export default CharacterCard;
