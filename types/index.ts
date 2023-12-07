import { CarCard } from '@/components';
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

  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }
