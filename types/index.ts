import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    // isDisabled?: boolean;
    btnType?: "button" | "submit";
    // textStyles?: string;
    title: string;
    containerStyles?: string;
    // rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }