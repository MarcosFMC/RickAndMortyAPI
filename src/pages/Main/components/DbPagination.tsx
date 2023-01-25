import { ButtonPagination } from "@/components";
import { DbPaginationContext } from "@/contexts";
import React, { useContext, useState } from "react";
import { ScDbPagination } from "../styled-components";
export interface IDbPagination {}

const DbPagination: React.FC<IDbPagination> = () => {
  const { setPage, page, maxLength, input, setInput } =
    useContext(DbPaginationContext);

  const nextPage = () => {
    setPage(page + 1);
    setInput(input + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
    setInput(input - 1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);

    if (e.keyCode == 13) {
      setPage(value);
      if (value < 1 || value > Math.ceil(maxLength) || isNaN(value)) {
        setPage(1);
        setInput(1);
      } else {
        setPage(value);
      }
    }
  };
  return (
    <ScDbPagination>
      <ButtonPagination
        onClick={previousPage}
        text="PREV"
        disabled={page === 1 || page < 1}
      ></ButtonPagination>
      <input
        onKeyDown={onKeyDown}
        value={input}
        name="page"
        autoComplete="off"
        onChange={(e) => setInput(e.target.value as unknown as number)}
      />
      <span> de {Math.ceil(maxLength)}</span>
      <ButtonPagination
        onClick={nextPage}
        disabled={page > maxLength}
        text="NEXT"
      ></ButtonPagination>
    </ScDbPagination>
  );
};

export default DbPagination;
