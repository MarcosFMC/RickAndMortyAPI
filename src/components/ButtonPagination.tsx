import { SCButtonPagination } from "@/styled-components";
import React from "react";
export interface IButtonPagination {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  disabled?: boolean | undefined;
}

const ButtonPagination: React.FC<IButtonPagination> = ({
  onClick,
  text,
  disabled,
}) => {
  return (
    <SCButtonPagination onClick={onClick} disabled={disabled}>
      {text}
    </SCButtonPagination>
  );
};

export default ButtonPagination;
