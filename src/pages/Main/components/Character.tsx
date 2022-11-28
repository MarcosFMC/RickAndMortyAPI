import { LoadingCharacter, Modal } from "@/components";
import { APICharacter } from "@/models";
import React, { useState } from "react";
import { SCCharacter } from "../styled-components";
import ModalCharacterDescription from "./ModalCharacterDescription";

const Character: React.FC<APICharacter> = (character) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SCCharacter onClick={() => setIsOpen(!isOpen)}>
      {character.loading ? (
        <LoadingCharacter></LoadingCharacter>
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

export default Character;
